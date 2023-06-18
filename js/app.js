// NavBar Shrink
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.screenY || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});
  

var navbar = document.querySelector('.navbar');
var content = document.querySelector('.content');

function adjustContentTop() {
  var navbarHeight = navbar.offsetHeight;
  content.style.paddingTop = navbarHeight + 'px';
}

window.addEventListener('load', adjustContentTop);
window.addEventListener('resize', adjustContentTop);

// Hamburger Menu
const hamburgerBtn = document.querySelector('.hamburger')
const navbarMobile = document.querySelector('.navbar-mobile')

hamburgerBtn.addEventListener('click', ()=>{
  hamburgerBtn.classList.toggle('active')
  navbarMobile.classList.toggle('active');
})