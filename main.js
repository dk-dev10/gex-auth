const sliderWrapper = document.querySelector('.gx-auth__slider');
const sliderDots = document.querySelectorAll('.gx-slider__dot');

let sliderNum = 1;
function sliderCounter(count, max, current = sliderNum) {
  sliderNum += count;
  if (sliderNum < 1) {
    sliderNum = max;
  } else if (sliderNum > max) {
    sliderNum = 1;
  }
  currentSlider(sliderNum, max);
}

function currentSlider(current, max) {
  sliderWrapper.classList.remove(...sliderWrapper.classList);
  sliderWrapper.classList.add(`gx-active-sl${current}`, 'gx-auth__slider');
}

let intervalId;

function startSlide(count = 1) {
  intervalId = setInterval(() => sliderCounter(count, 4), 5000);
}

function resetSlide(num = 1) {
  clearInterval(intervalId);
  startSlide(num);
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderNum = index + 1;
    resetSlide();
    currentSlider(sliderNum, 4);
  });
});

startSlide();
