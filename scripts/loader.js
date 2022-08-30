const loaderWrap = document.querySelector('.loader_wrap');

window.onload = function () {
    loaderWrap.style.opacity = '0';
    setTimeout(() =>  {
        loaderWrap.style.display = 'none';
        document.body.style.position = 'relative';
    }, 1000);

}