// Toggler Nav Mobile 

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]")
const overlay = document.querySelector("[data-overlay")

const toggleNavbar = () => {
  navbar.classList.toggle("nav-active")
  overlay.classList.toggle("active")
}

addEventOnElements(navTogglers, "click", toggleNavbar);


// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    580: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
    // 640: {
    //   slidesPerView: 2
    // },
    // 480: {
    //   slidesPerView: 1
    // }
  }
});

