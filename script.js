// ==========================================================
// CodeGym Career - custom JavaScript
// ==========================================================

$(function () {
  // Update copyright year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Close mobile navbar after selecting a link
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Smooth scroll with navbar offset
  $('a[href^="#"]').on("click", function (event) {
    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = $(targetId);
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 72
        },
        550
      );
    }
  });

  // Back to top
  const backToTop = $("#backToTop");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 450) {
      backToTop.fadeIn(180);
    } else {
      backToTop.fadeOut(180);
    }
  });

  backToTop.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 550);
  });

  // Demo consultation form validation
  const form = document.getElementById("consultForm");
  const phoneInput = document.getElementById("phone");
  const message = document.getElementById("formMessage");

  function isValidVietnamPhone(value) {
    return /^(0|\+84)[0-9]{9,10}$/.test(value.replace(/\s/g, ""));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!isValidVietnamPhone(phoneInput.value)) {
      phoneInput.setCustomValidity("invalid");
    } else {
      phoneInput.setCustomValidity("");
    }

    if (form.checkValidity()) {
      message.classList.remove("d-none");

      // Demo only: do not send real personal data anywhere.
      form.reset();
      form.classList.remove("was-validated");

      setTimeout(function () {
        message.classList.add("d-none");
      }, 4500);
    } else {
      message.classList.add("d-none");
      form.classList.add("was-validated");
    }
  });

  phoneInput.addEventListener("input", function () {
    phoneInput.setCustomValidity("");
  });
});
