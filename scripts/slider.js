const slider = document.querySelector('.cards_row');
const sliderItem = document.querySelector('.card');

const dots = document.querySelector('.cards_dots');

function sliderAction (slider, sliderItem, dots) {
  let sliderOffset = slider.offsetLeft;
  let sliderLength = slider.children.length;
  let slideWidth = sliderItem.offsetWidth;
  let posInitial, posFinal, posX1 = 0, posX2 = 0;
  let threshold = slideWidth / 15;
  let index = 0;
  
  addDots();

  slider.addEventListener('transitionend', checkIndex);

  function checkIndex () {
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
  }
  
  function activeDot (index) {
    for (dot of dots.children) {
      dot.classList.remove('cards_dot_active');
    }
    dots.children[index].classList.add('cards_dot_active');
  }

  function move (dest) {
    if (dest === -1) {
      sliderOffset += slideWidth;
      slider.style.left = sliderOffset + 'px';
    }
    if (dest === 1) {
      sliderOffset -= slideWidth;
      slider.style.left = sliderOffset + 'px';
    }
    index = Math.round(Math.abs(sliderOffset / slideWidth));
  }

  window.addEventListener('resize', () => {
    setTimeout(() => {
      slideWidth = sliderItem.offsetWidth;
      index = 0;
      sliderOffset = -slideWidth * index;
      slider.style.left = sliderOffset + 'px';
    }, 300)
  })

  slider.onmousedown = dragStart;
  
  slider.addEventListener('touchstart', dragStart);
  slider.addEventListener('touchmove', dragAction);
  slider.addEventListener('touchend', dragEnd);
   
  function dragStart (e) {
    e.preventDefault();
    posInitial = slider.offsetLeft;
    posX1 = e.changedTouches[0].clientX;
    document.onmouseup = dragEnd;
    document.onmousemove = dragAction;
  }

  function dragAction (e) {
    posX2 = posX1 - e.changedTouches[0].clientX;
    posX1 = e.changedTouches[0].clientX;
    console.log(posX2);
    slider.style.left = (slider.offsetLeft - posX2 * 8) + "px";
  }
  
  function dragEnd () {
    posFinal = slider.offsetLeft;
    console.log(posFinal);
    if ((posFinal - posInitial < -threshold) && (index < sliderLength - 1)) {
      move(1);
    } else if ((posFinal - posInitial > threshold) && (index > 0)) {
      move(-1);
    } else {
      slider.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
}



sliderAction(slider, sliderItem, dots);