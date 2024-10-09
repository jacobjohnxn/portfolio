
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

  gsap.to('.box', {
    scrollTrigger: {
        trigger:'.box',
        // start :'top center',
        markers:true,
        toggleActions:"restart pause restart restart"
    },
    x:100,
    y:20,
    duration:3
});

gsap.to('.secbox', {
    scrollTrigger: {
        trigger:'.secbox',
        // start :'top center',
        markers:true,
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