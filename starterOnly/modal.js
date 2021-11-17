// DOM ELEMENTS MODAL 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');
const navBurger = document.querySelector('.nav__burger');

// ------ DISPLAY MODAL ------ //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = 'block';
}
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);

// ------ DISPLAY NAV RESPONSIVE ------ //
// EDIT NAV
function toggleNav(event) {
  let nav = event.target.closest('.nav');
  nav.classList.toggle('responsive');
}

navBurger.addEventListener('click', toggleNav);