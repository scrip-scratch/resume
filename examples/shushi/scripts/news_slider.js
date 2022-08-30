const newsSlider = document.querySelector('.news-slider__items');
const newsSliderItem = document.querySelector('.news-slider__item');

const newsPrevButton = document.querySelector('.news-slider__prev');
const newsNextButton = document.querySelector('.news-slider__next');

const newsSliderGap = 41;

function newsSliderAction (slider, sliderItem, prevBtn, nextBtn, gap) {
  let sliderOffset = slider.offsetLeft;
  let sliderLength = slider.children.length;
  let slideWidth = sliderItem.offsetWidth + gap;
  let index = 0;
  
  prevBtn.addEventListener('click', () => move(-1));
  nextBtn.addEventListener('click', () => move(1));

  move(1);
  move(-1);
  
  function move (dest) {
    if (dest === -1) {
      sliderOffset += slideWidth;
      slider.style.left = sliderOffset + 'px';
    }
    if (dest === 1) {
      sliderOffset -= slideWidth;
      slider.style.left = sliderOffset + 'px';
    }
    index = Math.abs(sliderOffset / slideWidth);
    checkIndex(index);
  }
  
  function checkIndex (index) {
    prevBtn.style.display = (index === 0) ? 'none' : 'block';
    nextBtn.style.display = (index === sliderLength - 1) ? 'none' : 'block';   
  } 
 
}

newsSliderAction(newsSlider, newsSliderItem, newsPrevButton, newsNextButton, newsSliderGap);