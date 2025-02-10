// Initialize Swiper
var swiper = new Swiper('.product-slider', {
    slidesPerView: 3,
    spaceBetween: 70,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoPlay: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 90,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 70,
        }
    }
});

