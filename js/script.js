  const slider = document.getElementById('carousel-slider');
  const totalSlides = document.querySelectorAll('.slider').length;
  let currentIndex = 0;

  const updateSlide = () => {
    slider.style.transition = 'transform 0.6s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    updateSlide();
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }
    updateSlide();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }, 6000);


$(".counter").counterUp({
  delay: 15,
  time: 1500,
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 10,
  grabCursor : true,

  autoplay: {
      delay: 2000,
      disableOnInteraction: false, // keeps autoplay on user interaction
    },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});

const hamMenu = document.getElementById('hamburger-menu');
const hamburgerBtn = document.getElementById('hamburger-btn');
const hamCloseBtn = document.getElementById('ham-close-btn')

hamburgerBtn.addEventListener("click", () => {
    hamMenu.classList.add("show");
  });
hamCloseBtn.addEventListener("click", () => {
    hamMenu.classList.remove("show");
  });


$('#chat-btn').on('click', function() { window.location = 'https://web.whatsapp.com/'; });