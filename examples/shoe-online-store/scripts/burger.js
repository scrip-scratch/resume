const headerNav = document.querySelector('.header__nav');
const headerBurger = document.querySelector('.header__burger');

const headerBurgerClose = document.querySelector('.header-nav__close');


headerBurger.addEventListener('click', () => {
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => { 
            headerBurger.children[i].classList.add('burger__hide');
        }, 100 * i);
        if(i == 2) {
            headerNav.style.display = 'flex';
            setTimeout(() => {
                headerNav.classList.add('header__nav_active');
            }, 250 * i);
        }
    }

})

headerBurgerClose.addEventListener('click', () => {
    headerNav.classList.remove('header__nav_active');
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            headerBurger.children[i].classList.remove('burger__hide');
        }, 100 * i);
        if(i == 2) {
            setTimeout(() => {
                headerNav.style.display = 'none';
            }, 250 * i);
        }
    }
})