// Accordion functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;

    // Toggle between showing and hiding the active accordion panel
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // Close any other open accordion items
    accordionHeaders.forEach((otherHeader) => {
      if (otherHeader !== this) {
        otherHeader.nextElementSibling.style.display = "none";
      }
    });
  });
});

const logo = document.querySelector(".logo h1");
logo.addEventListener("click", function () {
  window.location.href = "/index.html";
});
