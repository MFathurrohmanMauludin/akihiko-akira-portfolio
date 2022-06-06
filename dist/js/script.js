// Navbar Fixed 
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        header.classList.remove('absolute');
    } else {
        header.classList.add('absolute');
        header.classList.remove('navbar-fixed');
    }
} 

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

document.addEventListener('mousemove', function(event) {
    if(hamburger.classList.contains('hamburger-active') && !event.target.isEqualNode(hamburger) && !event.target.isEqualNode(hamburger) && !hamburger.contains(event.target)) {
        if(!navMenu.contains(event.target)){
            navMenu.classList.add('hidden');
            hamburger.classList.remove('hamburger-active');
        }
    }
  });