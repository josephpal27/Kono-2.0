const lightOff = document.querySelector('.toggle-imx-box #light-off');
const lightOn = document.querySelector('.toggle-imx-box #light-on');

document.querySelector('.toggle-imx-box').addEventListener('mouseenter', () => {
    lightOff.classList.add('hide');
    lightOn.classList.remove('hide');
});

document.querySelector('.toggle-imx-box').addEventListener('mouseleave', () => {
    lightOff.classList.remove('hide');
    lightOn.classList.add('hide');
});

// Ensure lamp 1 is visible on page load
window.addEventListener('load', () => {
    lightOff.classList.remove('hide');
    lightOn.classList.add('hide');
});