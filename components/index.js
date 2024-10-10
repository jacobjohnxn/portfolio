
var typed = new Typed(".typing", {
  strings: [
    "",
    "Frontend Developer,",
    "Backend Developer,",
    "Mobile Apps Developer.",
    "python coder",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

(function () {
  emailjs.init("S0eaM96pWAltfGWm1"); // Replace with your EmailJS user ID
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_p5cy2di", "template_cycqa9d", this).then(
      function () {
        alert("Message sent!");
      },
      function (error) {
        alert("Failed to send message: " + JSON.stringify(error));
      }
    );
  });
//for carousel
  let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('block');
                slide.classList.remove('hidden');
            } else {
                slide.classList.remove('block');
                slide.classList.add('hidden');
            }
        });
    }

    function moveToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlides();
    }

    function moveToNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides();
    }

    // Automatically move to the next slide every 5 seconds
    setInterval(moveToNextSlide, 5000);

    // Initialize the first slide
    updateSlides();
//end of caraisel js
  gsap.to('.box', {
    scrollTrigger: {
        trigger:'.box',
        // start :'top center',
        // markers:true,
        toggleActions:"restart pause restart restart"
    },
    x:50,
    y:20,
    duration:3,
    transformOrigin: "top left" // Adjust as needed

});

gsap.to('.secbox', {
    scrollTrigger: {
        trigger:'.secbox',
        // start :'top center',
        // markers:true,
        toggleActions:"restart pause restart restart"
    },
    x:50,
    duration:3
});
gsap.set('.skillleft', { x: -300 });
gsap.to('.skillleft', {
  scrollTrigger: {
      trigger:'.skillleft',
      toggleActions:"restart pause restart restart"
  },
  x:0,
  duration:1
});
gsap.set('.skillright', { x: 300 });
gsap.to('.skillright', {
  scrollTrigger: {
      trigger:'.skillright',
      toggleActions:"restart pause restart restart"
  },
  x:0,
  duration:1
});