const menuIcon = document.querySelector(".header__menuIcon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");
});
