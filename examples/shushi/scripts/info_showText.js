const showMore = document.querySelector('.info__more');
const blurBox = document.querySelector('.info__blur');
const infoArticle = document.querySelector('.info__article');

showMore.addEventListener('click', () => {
    if (window.screen.width <= 500) {
        infoArticle.style.height = 'auto';
        showMore.style.bottom = '25px';
        showMore.style.visibility = 'hidden';
        showMore.style.display = 'none';
        showMore.style.opacity = '0';
        blurBox.style.opacity = '0';
    } else {
        showMore.style.bottom = '-15px';
        showMore.style.visibility = 'hidden';
        showMore.style.opacity = '0';
        blurBox.style.opacity = '0';
    }  
})