'use strict';
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('main-menu');
function setMenu(open) {
  menu.classList.toggle('show', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
document.querySelectorAll('[data-format]').forEach(link => {
  link.addEventListener('click', () => {
    const notice = document.getElementById('format-notice');
    notice.textContent = `Bạn đang quan tâm đến ${link.dataset.format.toLowerCase()}. Hãy đọc chương mẫu miễn phí để khám phá nội dung. Các phiên bản và giá là minh họa, chưa hỗ trợ đặt mua.`;
    notice.hidden = false;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
