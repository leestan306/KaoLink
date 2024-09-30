// Script for interactive buttons and features

document
  .getElementById("view-listings-btn")
  .addEventListener("click", function () {
    // Navigate to the listings page
    window.location.href = "listing/index.html";
  });

const logo = document.querySelector(".logo h1");
logo.addEventListener("click", function () {
  window.location.href = "/index.html";
});
