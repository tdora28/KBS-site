// RESPONSIVE NAVIGATION

const menuBtn = document.getElementById('js-menuBtn');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const menuLinks = document.querySelectorAll('.menu__link');
let showMenu = false;
const mdScreen = window.matchMedia("(min-width: 786px)");

// Toggle Menu
// Toggles menu on smaller screens. Activated by clicking the menu icon.
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

// Clear Media Query
// Clears out some remaining classes from the responsive navigation, and sets showMenu to false on bigger screen sizes.
// Parameter: screen size to listen to: window.matchMedia("(min-width: 786px)")
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


// CURRENT YEAR IN FOOTER
const year = document.getElementById('js-year');

year.innerHTML = (new Date()).getFullYear();


//  DISPLAY EMAIL ADDRESS
const email = document.getElementById('js-email');
const emailFirst = "s.kisfaludi.bak";
const emailSecond = "tue.nl";

email.innerHTML = `${emailFirst}&#64;${emailSecond}`;
