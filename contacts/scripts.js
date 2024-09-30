// Handle contact form submission with mock send action
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent! We will get back to you shortly.");
    window.location.href = "/index.html";
  });

const logo = document.querySelector(".logo h1");
logo.addEventListener("click", function () {
  window.location.href = "/index.html";
});
