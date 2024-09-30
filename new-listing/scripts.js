// Handle Image Preview
document.getElementById("image").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("imagePreview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Handle form submission with mock save
document
  .getElementById("newListingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Listing added successfully!");
    window.location.href = "/listing/index.html";
  });

const logo = document.querySelector(".logo h1");
logo.addEventListener("click", function () {
  window.location.href = "/index.html";
});
