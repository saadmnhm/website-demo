const navLinks = document.querySelectorAll('.menu li a');
let isScrollListenerActive = false;

function setActiveTab() {
  const sections = document.querySelectorAll('section');
  let scrollPosition = window.scrollY + 50;

  sections.forEach(section => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.menu li a[href="#${section.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Enable or disable scroll-based active tab
function toggleScrollListener() {
  const isPhone = window.innerWidth <= 768; // Define your breakpoint (e.g., 768px for tablets and below)
  
  if (isPhone && isScrollListenerActive) {
    window.removeEventListener('scroll', setActiveTab);
    isScrollListenerActive = false;
    navLinks.forEach(link => link.classList.remove('active')); // Remove active states on phones
  } else if (!isPhone && !isScrollListenerActive) {
    window.addEventListener('scroll', setActiveTab);
    isScrollListenerActive = true;
  }
}

// Initial check and event listener for window resize
toggleScrollListener();
window.addEventListener('resize', toggleScrollListener);

// Update active link on click (always applies, regardless of screen size)
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    if (!window.matchMedia('(max-width: 768px)').matches) {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });
});










$(function() {
    $("#showPopup").click(function(e) {
      e.stopPropagation();
      $(".bg").toggle();
      $(".popup").toggle();
    });
    $("body").click(function() {
      $(".bg").toggle();
      $(".popup").hide();
      var video = $("#player").attr("src");
      $("#player").attr("src", "");
      $("#player").attr("src", video);
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header');
    const target = document.querySelector('.aventage');
    const targetOffset = target.offsetTop;

    window.addEventListener('scroll', function () {
        // Check if the top of the .aventage div is in view
        if (window.scrollY >= targetOffset) {
            header.classList.add('highlight');
            header.classList.remove('default');
        } else {
            header.classList.remove('highlight');
            header.classList.add('default');
        }
    });
});







window.addEventListener("resize", function () {
  const vdYoutube = document.getElementById("vd-youtube");

  if (window.innerWidth <= 991) {
    vdYoutube.style.position = "absolute";
    vdYoutube.style.top = "100px";
    vdYoutube.style.left = "0";
    vdYoutube.style.width = "100%";
    vdYoutube.style.zIndex = "999";
  } else {
    vdYoutube.style.position = "relative"; // Reset for larger screens
    vdYoutube.style.top = "unset";
    vdYoutube.style.left = "unset";
    vdYoutube.style.width = "unset";
    vdYoutube.style.zIndex = "unset";
  }
});




 let currentIndex = 0;

        function updateSlider(index) {
            const slider = document.querySelector('.slider');
            const offset = index * 100;
            slider.style.transform = `translateX(-${offset}%)`;
            slider.style.opacity = 0.6; // Затухание
            setTimeout(() => {
                slider.style.opacity = 1; // Возвращение к полной непрозрачности
            }, 350); // Продолжительность затухания

            // Обновляем активный элемент меню
            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector(`.menu-item[data-index="${index + 1}"]`).classList.add('active');
        }

        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => { 
                const index = parseInt(item.getAttribute('data-index')) - 1;
                currentIndex = index;
                updateSlider(index);
            });
        });

        // Инициализация Hammer.js
        const slider = document.querySelector('.slider');
        const hammer = new Hammer(slider);

        hammer.on('swipeleft', () => {
            currentIndex = (currentIndex + 1) % 2;
            updateSlider(currentIndex);
        });

        hammer.on('swiperight', () => {
            currentIndex = (currentIndex - 1 + 2) % 2;
            updateSlider(currentIndex);
        });

        // Инициализация первого слайда
        updateSlider(currentIndex);

        // Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % 2; // Cycle to the next index (0 or 1)
  updateSlider(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + 2) % 2; // Cycle to the previous index (0 or 1)
  updateSlider(currentIndex);
}

// Add event listeners to buttons
document.getElementById('next-btn').addEventListener('click', nextSlide);
document.getElementById('prev-btn').addEventListener('click', prevSlide);
