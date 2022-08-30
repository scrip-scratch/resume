const sideMenu = document.querySelector('.side_menu');

window.addEventListener('scroll', function() {
  if (pageYOffset < 600) {
    sideMenu.classList.remove('side_menu_showed');
  } else {
    sideMenu.classList.add('side_menu_showed');
  }
});

const buttonUp = document.querySelector('.button_up');

buttonUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})