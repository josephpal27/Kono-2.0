
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
        clickable: false,
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
// ---------------------------------------------------------------------------

// Functionality for the lamp images
const lamp1 = document.querySelector('.about .about-lamp #lamp-1');
const lamp2 = document.querySelector('.about .about-lamp #lamp-2');

document.querySelector('.about .about-lamp').addEventListener('mouseenter', () => {
    lamp1.classList.add('hide');
    lamp2.classList.remove('hide');
});

document.querySelector('.about .about-lamp').addEventListener('mouseleave', () => {
    lamp1.classList.remove('hide');
    lamp2.classList.add('hide');
});

// Ensure lamp 1 is visible on page load
window.addEventListener('load', () => {
    lamp1.classList.remove('hide');
    lamp2.classList.add('hide');
});

// ---------------------------------------------------------------------------

// Functionality for Gallery Section Image Toggle
let imgBox1 = document.querySelector('.gallery-images #img-box-1');
let imgBox3 = document.querySelector('.gallery-images #img-box-3');
let imgBox4 = document.querySelector('.gallery-images #img-box-4');
let imgBox5 = document.querySelector('.gallery-images #img-box-5');

let imgToggleBoxImages = document.querySelectorAll('.gallery-images #img-toggle-box img');

let title1 = document.querySelector('#gallery-title-1');
let title2 = document.querySelector('#gallery-title-2');

imgBox1.addEventListener('click', () => {
    imgToggleBoxImages.forEach((img) => {
        img.classList.remove('show');
    });
    imgToggleBoxImages[1].classList.add('show');
    title1.innerHTML = 'post';
    title2.innerHTML = 'top';
})
imgBox3.addEventListener('click', () => {
    imgToggleBoxImages.forEach((img) => {
        img.classList.remove('show');
    });
    imgToggleBoxImages[2].classList.add('show');
    title1.innerHTML = 'flood';
    title2.innerHTML = 'light';
})
imgBox4.addEventListener('click', () => {
    imgToggleBoxImages.forEach((img) => {
        img.classList.remove('show');
    });
    imgToggleBoxImages[3].classList.add('show');
    title1.innerHTML = 'spot';
    title2.innerHTML = 'light';
})
imgBox5.addEventListener('click', () => {
    imgToggleBoxImages.forEach((img) => {
        img.classList.remove('show');
    });
    imgToggleBoxImages[4].classList.add('show');
    title1.innerHTML = 'all';
    title2.innerHTML = 'purpose';
})