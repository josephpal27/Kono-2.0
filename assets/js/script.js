
// Functionality for the banner image slider
var imageSwiper = new Swiper(".bannerImageSwiper", {
    effect: 'coverflow',
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    autoPlay: true,
    spaceBetween: 160,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 800,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 5.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    allowTouchMove: false, // Disable touch movement
});

// ---------------------------------------------------------------------------

// Functionality for the banner text slider
var textSwiper = new Swiper(".bannerTextSwiper", {
    loop: true,
    slidesPerView: 1,
    autoPlay: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 800,
    allowTouchMove: false, // Disables touch movement
});