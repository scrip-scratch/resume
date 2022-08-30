function toggleActionSelect (obj, objOpt) {

    if (obj.classList.contains('action_select_active')) {
        obj.classList.remove('action_select_active');
        obj.classList.add('action_select');
        objOpt.style.display = 'none';
    } else {
        obj.classList.add('action_select_active');
        obj.classList.remove('action_select');
        objOpt.style.display = 'flex';
    }
}

// ==== Select Location ====
const selectLocation = document.querySelector('.select_location');
const selectLocationOptions = document.querySelector('.select_location_options');
const selectLocationCurrent = document.querySelector('.select_current_location');

selectLocation.addEventListener('click', () => {

    toggleActionSelect(selectLocation, selectLocationOptions);

    const locationOptions = document.querySelectorAll('.location_option');

    for (let option of locationOptions) {
        option.addEventListener('click', () => {
            selectLocationCurrent.innerHTML = option.innerHTML;
            selectLocation.classList.remove('action_select_active');
            selectLocation.classList.add('action_select');
            selectLocationOptions.style.display = 'none';
        })
    }
});

// ==== Select Type ====
const selectType = document.querySelector('.select_type');
const selectTypeOptions = document.querySelector('.select_type_options');
const selectTypeCurrent = document.querySelector('.select_current_type');

selectType.addEventListener('click', () => {

    toggleActionSelect(selectType, selectTypeOptions);

    const typeOptions = document.querySelectorAll('.type_option');

    for (let option of typeOptions) {
        option.addEventListener('click', () => {
            selectTypeCurrent.innerHTML = option.innerHTML;
            selectType.classList.remove('action_select_active');
            selectType.classList.add('action_select');
            selectTypeOptions.style.display = 'none';
        })
    }
});

// ==== Select Price ====
const selectPrice = document.querySelector('.select_price');
const selectPriceOptions = document.querySelector('.select_price_options');
const selectPriceCurrent = document.querySelector('.select_current_price');

selectPrice.addEventListener('click',() => {

    toggleActionSelect(selectPrice, selectPriceOptions);

    const priceOption = document.querySelector('.price_option');
    const priceOptionSubmit = document.querySelector('.price_option_submit');

    priceOptionSubmit.addEventListener('click', () => {

        newPrice = String(parseFloat(priceOption.value, 10)) === String(priceOption.value) ? priceOption.value : '0.00';
        newPrice = newPrice.includes('.') ? newPrice : `${newPrice}.000`

        selectPriceCurrent.innerHTML = `$${newPrice}`;
        selectPrice.classList.remove('action_select_active');
        selectPrice.classList.add('action_select');
        selectPriceOptions.style.display = 'none';
        
    })
});


// ============================= FEEDBACK SLIDER ==================================
const feedbackSlider = document.querySelector('.feedback_slider_items');
const sliderButtonPrev = document.querySelector('.feedback_slider_nav_prev');
const sliderButtonNext = document.querySelector('.feedback_slider_nav_next');
const sliderPages = Array.from(document.querySelectorAll('.feedback_slider_page'));
const sliderPageState = document.querySelector('.feedback_slider_page_state');

let offset = 0;

function setSliderPageState (page) {
    switch (page) {
        case 0:
            sliderPageState.style.left = '31px';
            break;
        case 1:
            sliderPageState.style.left = '87px';
            break;
        case 2:
            sliderPageState.style.left = '143px';
            break;
        default:
            break;
    }
}

function slideNext () {
    offset = offset + 550; 
    if (offset >= 1650) {
        offset = 0;
    }
    feedbackSlider.style.left = -offset + 'px';
    setSliderPageState (offset/550);
}
function slidePrev () {
    offset = offset - 550; 
    if (offset < 0) {
        offset = 1100;
    }
    feedbackSlider.style.left = -offset + 'px';
    setSliderPageState (offset/550);
}




sliderButtonNext.addEventListener('click', (e) => {
    e.preventDefault();
    slideNext();
})
sliderButtonPrev.addEventListener('click', (e) => {
    e.preventDefault();
    slidePrev();
})

sliderPages.forEach(page => {
    page.addEventListener('click', ()=>{

        feedbackSlider.style.left = -550 * sliderPages.indexOf(page) + 'px';
        setSliderPageState (sliderPages.indexOf(page));
    })
})



// setInterval(slideNext, 3000);

// === Form ====
document.querySelector('.subscribe_form_button').addEventListener('click', (e) => {
    e.preventDefault();
})