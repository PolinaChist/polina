const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
  console.log('хуй');
  const menuBody = document.querySelector('.header__body');
  menuBody.classList.toggle('header__body_active');
});