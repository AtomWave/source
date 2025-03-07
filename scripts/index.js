/* в этот файл добавляет скрипты*/

const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', () => {
  const isMenuOpen = mainNav.classList.contains('main-nav--closed');
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
  navToggle.setAttribute('aria-expanded', !isMenuOpen);
});

const selectElement = document.querySelector('.catalog__sorting');
const selectControl = document.querySelector('.select__control');

selectControl.addEventListener('focus', () => {
  selectElement.classList.add('active');
});

selectControl.addEventListener('blur', () => {
  selectElement.classList.remove('active');
});

selectControl.addEventListener('change', () => {
  selectElement.classList.remove('active');
});
