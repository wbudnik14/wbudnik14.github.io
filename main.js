//dropdown hide
// show/hide the menu when examples is clicked
if (window.matchMedia("(max-width: 1000px)").matches) {
  // Skrypt działa tylko w wersji mobilnej
  // Pokaż/ukryj menu po kliknięciu na przycisk "Produkty"
  $(".dropdowntoggle").on("click", function (e) {
    e.preventDefault(); // Zatrzymaj domyślne działanie przycisku
    $(".nav__links").toggle();
  });

  // Ukryj menu po kliknięciu na dowolny element wewnątrz sekcji "Produkty"
  $(".example").on("click", function () {
    $(".nav__links").hide();
  });
}

//zamykanie produktów
$(document).ready(function () {
  // Obsługa kliknięcia na przycisku "Produkty" w wersji mobilnej
  $(".products").on("touchstart", function () {
    // Znajdź sekcję dropdown
    var dropdown = $(this).next(".dropdown");
    // Sprawdź, czy sekcja dropdown jest widoczna
    var isVisible = dropdown.is(":visible");
    // Zamknij wszystkie inne otwarte sekcje dropdown na stronie
    $(".dropdown").not(dropdown).hide();
    // Jeśli sekcja jest widoczna, ukryj ją; jeśli nie, pokaż ją
    dropdown.toggle(!isVisible);
  });

  // Obsługa kliknięcia na elementach wewnątrz sekcji dropdown (opcjonalne)
  $(".dropdown .example").on("click", function () {
    // Ukryj sekcję dropdown po kliknięciu na dowolny element wewnątrz
    $(this).closest(".dropdown").hide();
  });
});

//przewijanie firm

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".coop-companies-slider");

  // Funkcja przemieszczająca elementy co 3 sekundy
  setInterval(function () {
    slider.scrollLeft += 1; // Przesuń slider w prawo o 1 piksel
    // Jeśli slider osiągnie koniec, przewiń na początek
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }
  }, 30); // Przesuń co 30 ms (odpowiednio szybkie, aby było płynne)
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
