if (window.innerWidth <= 1024) {
  const slider = document.querySelector('.slider-mobile');
  const slides = slider.querySelectorAll('.slide');
  let currentIndex = 0;

  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  function updateSlides(direction) {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.style.opacity = '0';
        setTimeout(() => {
          slide.style.display = 'none';
          if (direction === 'next') {
            currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
          } else if (direction === 'prev') {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
          }
          slide = slides[currentIndex];
          slide.style.display = 'block';
          slide.style.opacity = '0';
          setTimeout(() => {
            slide.style.opacity = '1';
          }, 20);
        }, 250);
      }
    });
  }

  updateSlides();

  leftArrow.addEventListener('click', () => {
    updateSlides('prev');
  });

  rightArrow.addEventListener('click', () => {
    updateSlides('next');
  });
}

else{
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
}