const menuButton = document.querySelector('.menu-button');
const mainnav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
