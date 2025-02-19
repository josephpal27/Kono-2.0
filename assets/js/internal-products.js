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
    lightOff.classList.add('hide');
    lightOn.classList.remove('hide');
});