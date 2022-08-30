const headerSearchInput = document.querySelector('.search__input');
const headerSearchImage = document.querySelector('.search__image');


const headerPhonesRegtime = document.querySelector('.header__phones-regime');

headerSearchImage.addEventListener('click', () => {
    if (window.screen.width <= 1200) {
        headerSearchInput.classList.toggle('header__search_active');
        headerPhonesRegtime.classList.toggle('header__phones-regime_hidden');
    } else {
        headerSearchInput.classList.toggle('header__search_active');
    }
})