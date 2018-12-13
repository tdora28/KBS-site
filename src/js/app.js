const menuBtn = document.getElementById('js-menuBtn');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const menuLinks = document.querySelectorAll('.menu__link');
let showMenu = false;
const mdScreen = window.matchMedia("(min-width: 786px)")

function toggleMenu() {
  if (!showMenu) {
    console.log('Open!');
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuItems.forEach(item => {
      item.classList.add('show');
    });
    menuLinks.forEach(item => {
      item.classList.add('show');
    });
    showMenu = true;
  } else {
    console.log('Close!');
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuItems.forEach(item => {
      item.classList.remove('show');
    });
    menuLinks.forEach(item => {
      item.classList.remove('show');
    });
    showMenu = false;
  }
}

function clearMQ(x) {
  if (x.matches) { // If media query matches
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuItems.forEach(item => {
      item.classList.remove('show');
    });
    menuLinks.forEach(item => {
      item.classList.remove('show');
    });
    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);
clearMQ(mdScreen); // Call listener function at run time
mdScreen.addListener(clearMQ); // Attach listener function on state changes

