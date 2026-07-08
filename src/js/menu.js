const burgerBtnEl = document.querySelector('[data-action="open"]');
const burgerMenuEl = document.querySelector('.mobile-menu[data-visible]');
const bodyEl = document.body;

burgerBtnEl.addEventListener('click', () => {
  const isOpen = burgerMenuEl.dataset.visible === 'open';

  const openEl = burgerBtnEl.querySelector('[data-burger-open]');
  const closeEl = burgerBtnEl.querySelector('[data-burger-close]');

  if (isOpen) {
    burgerMenuEl.dataset.visible = 'close';

    openEl.dataset.visible = 'open';
    closeEl.dataset.visible = 'close';
    bodyEl.removeAttribute('data-scroll');
  } else {
    burgerMenuEl.dataset.visible = 'open';

    openEl.dataset.visible = 'close';
    closeEl.dataset.visible = 'open';
    bodyEl.setAttribute('data-scroll', 'lock');
  }
});

const menuLinks = document.querySelectorAll('[data-mobile-link]');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const openEl = burgerBtnEl.querySelector('[data-burger-open]');
    const closeEl = burgerBtnEl.querySelector('[data-burger-close]');

    burgerMenuEl.dataset.visible = 'close';

    openEl.dataset.visible = 'open';
    closeEl.dataset.visible = 'close';
    bodyEl.removeAttribute('data-scroll');
  });
});
