const gdImages = document.querySelectorAll('.gd_image');
const viewWrap = document.querySelector('.image_view_wrap');
const viewImage = document.querySelector('.image_view');

for (image of gdImages) {
    image.addEventListener('click', (e) => {
        showImage(e.target);
        viewWrap.addEventListener('click', () => closeImage());
    })
}

function showImage (image) {
    viewWrap.style.display = 'block';
    viewImage.src = image.src;
}

function closeImage () {
    viewWrap.style.display = 'none';
    viewImage.src = '';
}