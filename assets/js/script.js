
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
    speed: 900,
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
    // on: {
    //     slideChange: function () {
    //         updateSlideStyles();
    //     },
    //     init: function () {
    //         updateSlideStyles();
    //     },
    // },
});

// function updateSlideStyles() {
//     const slides = document.querySelectorAll('.bannerImageSwiper .swiper-slide img');
//     slides.forEach((slide) => {
//         slide.classList.add('grayscale');
//     });
//     const activeSlide = document.querySelector('.bannerImageSwiper .swiper-slide-active img');
//     if (activeSlide) {
//         activeSlide.classList.remove('grayscale');
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------------

// Functionality for the banner text slider
var textSwiper = new Swiper(".bannerTextSwiper", {
    loop: true,
    slidesPerView: 1,
    autoPlay: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 900,
    allowTouchMove: false, // Disables touch movement
});
// -------------------------------------------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------------------------------------------

// Functionality for Gallery Section Image Toggle

let imgBoxImages = document.querySelectorAll('.gallery-images .img-box img');

let title1 = document.querySelector('#gallery-title-1');
let title2 = document.querySelector('#gallery-title-2');

let galleryBtn = document.querySelector('.gallery-btn a');

let imgBox1 = document.querySelector('.gallery-images #img-box-1');
let imgBox2 = document.querySelector('.gallery-images #img-box-2');
let imgBox3 = document.querySelector('.gallery-images #img-box-3');
let imgBox4 = document.querySelector('.gallery-images #img-box-4');
let imgBox5 = document.querySelector('.gallery-images #img-box-5');

imgBoxImages.forEach((img) => {
    img.addEventListener('click', () => {
        if (img.classList.contains('dark')) {
            imgBoxImages.forEach((otherImg) => {
                otherImg.classList.add('dark');
            });
            img.classList.remove('dark');
        } else {
            if (img === imgBox1.querySelector('img')) {
                window.location.href = 'post-top.html';
            } else if (img === imgBox2.querySelector('img')) {
                window.location.href = 'street-light.html';
            } else if (img === imgBox3.querySelector('img')) {
                window.location.href = 'flood-light.html';
            } else if (img === imgBox4.querySelector('img')) {
                window.location.href = 'landscape.html';
            } else if (img === imgBox5.querySelector('img')) {
                window.location.href = 'all-purpose.html';
            }
        }
    });
});

imgBox1.addEventListener('click', () => {
    title1.innerHTML = 'post';
    title2.innerHTML = 'top';
    galleryBtn.setAttribute('href', 'post-top.html');
    title1.classList.remove('hiddenText');
})
imgBox2.addEventListener('click', () => {
    title1.innerHTML = 'street';
    title2.innerHTML = 'light';
    galleryBtn.setAttribute('href', 'street-light.html');
    title1.classList.remove('hiddenText');
})
imgBox3.addEventListener('click', () => {
    title1.innerHTML = 'flood';
    title2.innerHTML = 'light';
    galleryBtn.setAttribute('href', 'flood-light.html');
    title1.classList.remove('hiddenText');
})
imgBox4.addEventListener('click', () => {
    title1.innerHTML = '-';
    title1.classList.add('hiddenText');
    title2.innerHTML = 'facade';
    galleryBtn.setAttribute('href', 'landscape.html');
})
imgBox5.addEventListener('click', () => {
    title1.innerHTML = 'all';
    title2.innerHTML = 'purpose ';
    galleryBtn.setAttribute('href', 'all-purpose.html');
    title1.classList.remove('hiddenText');
})
// -------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back to Top button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 300) {
        scrollProgress.classList.add('show');
    } else {
        scrollProgress.classList.remove('show');
    }

    scrollProgress.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #000 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// -------------------------------------------------------------------------------------------------------------------------------

// Function to handle smooth scrolling with Lenis on clicking Nav Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#about' || targetId === '#contact') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                lenis.scrollTo(targetElement);
            }
        }
    });
});