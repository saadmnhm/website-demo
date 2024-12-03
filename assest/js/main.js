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







document.addEventListener("DOMContentLoaded", function () {
  function moveDivToTop() {
      const vdYoutube = document.getElementById("vd-youtube");
      
      if (window.innerWidth <= 991 && window.innerWidth >= 400) {
          // Add a class to style it as fixed at the top
          vdYoutube.classList.add("fixed-top");
      } else {
          // Remove the fixed class when out of the screen range
          vdYoutube.classList.remove("fixed-top");
      }
  }

  // Execute on load
  moveDivToTop();

  // Execute on window resize
  window.addEventListener("resize", moveDivToTop);
});
