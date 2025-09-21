const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


var testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: "auto", 
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,

  
autoplay: {
  delay: 4000,
  disableOnInteraction: false,
},

  
effect: "coverflow",
coverflowEffect: {
  rotate: 0, 
  stretch: 0, 
  depth: 100, 
  modifier: 1, 
  slideShadows: false,
},

// pagination: {
//   el: ".swiper-pagination",
//   clickable: true,
// },
navigation: {
  nextEl: ".testimonial-button-next",
  prevEl: ".testimonial-button-prev",
},
});



var doctorsSwiper = new Swiper(".doctors-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  centeredSlide: true,
  speed: 900,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".doctors-button-next",
    prevEl: ".doctors-button-prev",
  },
});

function playVideo() {
  document.querySelector('.thumbnail').style.display = 'none';
  document.getElementById('videoFrame').style.display = 'block';
}

document.getElementById('year').textContent = new Date().getFullYear();

AOS.init();
