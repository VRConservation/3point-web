document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var scrollBtn = document.getElementById('scroll-to-top');
  var mobileToggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelector('.nav-links');

  // Navbar background on scroll
  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }

    // Active section highlighting
    var sections = document.querySelectorAll('section[id]');
    var scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      var link = navLinks.querySelector('[data-section="' + section.id + '"]');
      if (!link) return;

      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile toggle
  mobileToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
});