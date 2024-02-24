//dropdown hide
// show/hide the menu when examples is clicked
$(".dropdowntoggle").on("click", function () {
  $(".nav__links").toggle();
});

// hide the menu when an exmple is clicked
$(".example").on("click", function () {
  $(".nav__links").hide();
});

//zamykanie produktów
$(document).ready(function () {
  // Obsługa zdarzenia kliknięcia na desktopach
  $(".products").on("click", function (event) {
    // Jeśli jesteśmy na urządzeniu mobilnym, zapobiegamy domyślnej akcji kliknięcia, aby uniknąć podwójnego zdarzenia
    if ($(window).width() > 768) {
      event.preventDefault();
    }
    // Toggle klasy show dla .dropdown
    $(".dropdown").toggleClass("show");
  });

  // Obsługa zdarzenia dotyku na urządzeniach mobilnych
  $(".products").on("touchstart", function () {
    // Toggle klasy show dla .dropdown
    $(".dropdown").toggleClass("show");
  });

  // Funkcja do zamykania .dropdown po kliknięciu na dowolny link wewnątrz
  $(".dropdown a").on("click", function () {
    $(".dropdown").removeClass("show");
  });
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
