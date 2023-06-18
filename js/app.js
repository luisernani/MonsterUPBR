window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.screenY || document.documentElement.scrollTop;
  
    if (scrollPosition > 0) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });
  