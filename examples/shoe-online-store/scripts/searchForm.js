const searchForm = document.querySelector('.search__input');
const searchFormButton = document.querySelector('.search__button');
const headerLogo = document.querySelector('.header__logo');

searchFormButton.addEventListener('click', (e) => {
    if (window.screen.width <= 830) {
        e.preventDefault();
        searchForm.classList.toggle('search__input_active');
        if (window.screen.width <= 570) {
            headerLogo.classList.toggle('header__logo_hide');
        }
    }
})