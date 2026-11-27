const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav');

if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});
