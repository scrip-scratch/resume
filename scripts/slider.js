const slider = document.querySelector('.cards_row');
const sliderItem = document.querySelector('.card');

const dots = document.querySelector('.cards_dots');

function sliderAction (slider, sliderItem, dots) {
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
      let dot = document.createElement('div');
      dot.classList.add('cards_dot');
      dots.appendChild(dot);
      dot.addEventListener('click', () => {moveByDot()});
      if (i == 1) dot.classList.add('cards_dot_active');
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
      dot.classList.remove('cards_dot_active');
    }
    dots.children[index].classList.add('cards_dot_active');
  }

  window.addEventListener('resize', () => {
    setTimeout(() => {
      slideWidth = sliderItem.offsetWidth;
      index = 0;
      sliderOffset = -slideWidth * index;
      slider.style.left = sliderOffset + 'px';
      checkIndex(index);
    }, 300)
  })
  
}

sliderAction(slider, sliderItem, dots);