const sliderSection = document.querySelector('.slider');
const sliderList = document.querySelector('.slider__list');
const slides = sliderList.querySelectorAll('.slider__item');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
const paginationList = document.querySelector('.slider__pagination');

let currentSlide = 0;

const createPaginationButtons = () => {
  paginationList.innerHTML = '';

  slides.forEach((_, index) => {
    const button = document.createElement('button');
    button.className = 'slider__pagination-button';
    button.type = 'button';
    button.innerHTML = `<span class="visually-hidden">${index + 1} слайд</span>`;

    button.addEventListener('click', () => prepareCurrentSlide(index));

    paginationList.appendChild(button);
  });

  if (paginationList.children.length > 0) {
    paginationList.children[0].classList.add('slider__pagination-button--current');
  }
};

const updateSlideDisplay = () => {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'flex' : 'none';
  });
};

const removeAllColorClasses = () => {
  for (let i = 1; i <= slides.length; i++) {
    sliderSection.classList.remove(`slider--color${i}`);
  }
};

const addCurrentColorClass = () => {
  removeAllColorClasses();
  sliderSection.classList.add(`slider--color${currentSlide + 1}`);
};

const updateButtonState = () => {
  buttonPrev.disabled = currentSlide === 0;
  buttonNext.disabled = currentSlide === slides.length - 1;
};

const updatePaginationState = () => {
  const paginationButtons = paginationList.querySelectorAll('.slider__pagination-button');

  paginationButtons.forEach((item, index) => {
    item.classList.toggle('slider__pagination-button--current', index === currentSlide);
  });
};

const prepareCurrentSlide = (index) => {
  if (index >= 0 && index < slides.length) {
    currentSlide = index;
    updateSlideDisplay();
    updateButtonState();
    updatePaginationState();
    addCurrentColorClass();
  }
};

const showSlide = (direction) => {
  if (direction === 'next') {
    currentSlide = (currentSlide + 1) % slides.length;
  } else if (direction === 'prev') {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }
  prepareCurrentSlide(currentSlide);
};

buttonNext.addEventListener('click', () => showSlide('next'));
buttonPrev.addEventListener('click', () => showSlide('prev'));

createPaginationButtons();
prepareCurrentSlide(currentSlide);
