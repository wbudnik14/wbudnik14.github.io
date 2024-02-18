// ----menu hamburger----
const menu_btn = document.querySelector(".hamburger");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
});

const menuHamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const textBox = document.querySelector(".text-box");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  textBox.classList.toggle("text-menu");
});

// Funkcja do przewijania do wybranego elementu
function scrollToElement(elementId) {
  var targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

//Funkcja przycisku kontakt
function scrollElement() {
  var element = document.getElementById("temat5");
  element.scrollIntoView({ behavior: "smooth" });
}

//Preloader
const preloader = document.querySelector("#preloader");

preloader.classList.add("show-preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    preloader.classList.remove("show-preloader");
  }, 2000);
});
