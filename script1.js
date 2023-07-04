const targetDate = new Date("2023-12-31T23:59:59").getTime();

const countdown = setInterval(() => {
  const currentDate = new Date().getTime();

  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 10,
  loopAdditionalSlides: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});






const loginPopupToggle = document.getElementById('loginPopupToggle');
const registerPopupToggle = document.getElementById('registerPopupToggle');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const popupOverlay = document.querySelector('.popup-overlay');

loginPopupToggle.addEventListener('change', function() {
  if (this.checked) {
    registerPopupToggle.checked = false;
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    popupOverlay.style.display = 'block';
    document.addEventListener('click', closePopupOutside);
  } else {
    popupOverlay.style.display = 'none';
    document.removeEventListener('click', closePopupOutside);
  }
});

registerPopupToggle.addEventListener('change', function() {
  if (this.checked) {
    loginPopupToggle.checked = false;
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    popupOverlay.style.display = 'block';
    document.addEventListener('click', closePopupOutside);
  } else {
    popupOverlay.style.display = 'none';
    document.removeEventListener('click', closePopupOutside);
  }
});

function openLoginPopup() {
  loginPopupToggle.checked = true;
  registerPopupToggle.checked = false;
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  popupOverlay.style.display = 'block';
  document.addEventListener('click', closePopupOutside);
}

function openRegisterPopup() {
  registerPopupToggle.checked = true;
  loginPopupToggle.checked = false;
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
  popupOverlay.style.display = 'block';
  document.addEventListener('click', closePopupOutside);
}

function closePopupOutside(event) {
  if (!event.target.closest('.popup-content')) {
    loginPopupToggle.checked = false;
    registerPopupToggle.checked = false;
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    popupOverlay.style.display = 'none';
    document.removeEventListener('click', closePopupOutside);
  }
}


