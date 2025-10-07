const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const year = document.getElementById("year");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

year.textContent = new Date().getFullYear();
