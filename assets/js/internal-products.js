const lightOff = document.querySelector('.toggle-imx-box #light-off');
const lightOn = document.querySelector('.toggle-imx-box #light-on');

document.querySelector('.banner .left').addEventListener('mouseenter', () => {
    lightOff.classList.add('hide');
    lightOn.classList.remove('hide');
});

document.querySelector('.banner .left').addEventListener('mouseleave', () => {
    lightOff.classList.remove('hide');
    lightOn.classList.add('hide');
});

// Ensure lamp 1 is visible on page load
window.addEventListener('load', () => {
    lightOff.classList.remove('hide');
    lightOn.classList.add('hide');
});

// -------------------------------------------------------------------------------------------------------------------------------

// Initialize Swiper
var swiper = new Swiper('.banner-product-slider', {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoPlay: false,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
    },
    breakpoints: {
        200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});