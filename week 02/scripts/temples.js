// Footer date
const currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

document.getElementById('lastModified').textContent =
  "Last modification: " + document.lastModified;

// Hamburger toggle
const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});
