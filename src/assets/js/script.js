const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
  if (header.classList.contains('open')) { //close menu
    //change btnHamburger to default
    body.classList.remove('no-scroll')
    header.classList.remove('open')
    fadeElements.forEach(element => {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    });
  } else { //open menu
    //change btnHamburger to X
    body.classList.add('no-scroll')
    header.classList.add('open')
    fadeElements.forEach(element => {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    });
  }
});