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
