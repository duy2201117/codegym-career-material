const cards = Array.from(document.querySelectorAll('.video-card'));
const list = document.getElementById('videoList');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const youtubePlayer = document.getElementById('youtubePlayer');
const html5Player = document.getElementById('html5Player');
const currentTitle = document.getElementById('currentTitle');
const currentDescription = document.getElementById('currentDescription');

function playCard(card) {
    cards.forEach(item => item.classList.remove('active'));
    card.classList.add('active');

    const { title, type, src, description } = card.dataset;
    currentTitle.textContent = title;
    currentDescription.textContent = description;

    if (type === 'youtube') {
        html5Player.pause();
        html5Player.removeAttribute('src');
        html5Player.hidden = true;
        youtubePlayer.hidden = false;
        youtubePlayer.src = src;
        youtubePlayer.title = title;
    } else {
        youtubePlayer.src = '';
        youtubePlayer.hidden = true;
        html5Player.hidden = false;
        html5Player.src = src;
        html5Player.load();
    }
}

cards.forEach(card => {
    card.addEventListener('click', () => playCard(card));
});

function filterCards() {
    const keyword = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach(card => {
        const match = card.dataset.title.toLowerCase().includes(keyword);
        card.style.display = match ? '' : 'none';
        if (match) visibleCount += 1;
    });

    let empty = document.querySelector('.empty-message');
    if (visibleCount === 0) {
        if (!empty) {
            empty = document.createElement('div');
            empty.className = 'empty-message';
            empty.textContent = 'Không tìm thấy phim phù hợp.';
            list.appendChild(empty);
        }
    } else if (empty) {
        empty.remove();
    }
}

function sortCards(mode) {
    const sorted = [...cards].sort((a, b) => {
        if (mode === 'views') {
            return Number(b.dataset.views) - Number(a.dataset.views);
        }
        return Number(b.dataset.date) - Number(a.dataset.date);
    });

    sorted.forEach(card => list.appendChild(card));
}

searchInput.addEventListener('input', filterCards);
sortSelect.addEventListener('change', event => sortCards(event.target.value));

document.querySelectorAll('[data-sort]').forEach(link => {
    link.addEventListener('click', event => {
        const mode = event.currentTarget.dataset.sort;
        sortSelect.value = mode;
        sortCards(mode);
    });
});
