const menuBtn = document.querySelector('.hamburger-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.wrapper');
const links = document.querySelectorAll('.nav-list');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
