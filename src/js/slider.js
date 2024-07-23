const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (index) => {
  activeSlideIndex = index;
  const sliderHeight = sliderContainer.clientHeight;
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
  updateDots();
};

const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots-container');
sliderContainer.appendChild(dotsContainer);

for (let i = 0; i < slidesLength; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => changeSlide(i));
  dotsContainer.appendChild(dot);
}

const updateDots = () => {
  document.querySelectorAll('.dot').forEach((dot, idx) => {
    if (idx === activeSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
};
