const slider = document.querySelector('.new-arr__row');
const sliderItem = document.querySelector('.new-arr__item');

const nextButton = document.querySelector('.new-arr__slider-button');

function sliderAction (slider, sliderItem, nextBtn) {
  let sliderOffset = slider.offsetLeft;
  let sliderLength = slider.children.length;
  let slideWidth = sliderItem.offsetWidth;
  let index = 0; 

  let firstItemCopy = slider.children[0].cloneNode(true);
  slider.appendChild(firstItemCopy);

  nextBtn.addEventListener('click', () => move());
  move();
  move();
  move();

  slider.addEventListener('transitionend', checkIndex, false);
  
  function move () {
    slider.classList.add('new-arr__row_animated');
    sliderOffset -= slideWidth;
    slider.style.left = sliderOffset + 'px';
    index = Math.abs(Math.round(sliderOffset / slideWidth));
  }
  
  function checkIndex() {
    slider.classList.remove('new-arr__row_animated');
    if (index == sliderLength) {
        reload();
    }
  }

  function reload () {
    sliderOffset = 0;
    slider.style.left = sliderOffset + 'px';
  }

}

sliderAction(slider, sliderItem, nextButton);