const bannerSlider = document.querySelector('.main-banner__slider');
const bannerSliderItem = document.querySelector('.main-banner__item');

const bannerDots = document.querySelector('.main-banner__dots');

function bannerSliderAction (slider, sliderItem, dots) {
  let sliderOffset = slider.offsetLeft;
  let sliderLength = slider.children.length;
  let slideWidth = sliderItem.offsetWidth;
  let index = 0;
  
  addDots();
   
  function checkIndex (index) {  
    activeDot(index);
  } 
  
  function addDots () {
    for(let i = 1; i <= sliderLength; i++) {
      let dot = document.createElement('span');
      dot.classList.add('dots__item');
      dots.appendChild(dot);
      dot.addEventListener('click', () => {moveByDot()});
      if(i === 1) dot.classList.add('dots__item_active');
    }
  }
  
  function moveByDot () {
    let dot = event.target;
    index = Array.from(dots.children).indexOf(dot);
    sliderOffset = -slideWidth * index;
    slider.style.left = sliderOffset + 'px';
    checkIndex(index);
  }
  
  function activeDot (index) {
    for (dot of dots.children) {
      dot.classList.remove('dots__item_active');
    }
    dots.children[index].classList.add('dots__item_active');
  }
  
}

bannerSliderAction(bannerSlider, bannerSliderItem, bannerDots);