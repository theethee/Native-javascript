// HANTERA NAV------------------------
// navigerar till länkar i nav
document.querySelector("#home-nav").addEventListener("click", () => {
  location.href = "index.html";
});

document.querySelector("#search-nav").addEventListener("click", () => {
  location.href = "search.html";
});

document.querySelector("#generator-nav").addEventListener("click", () => {
  location.href = "generator.html";
});

document.querySelector("#contact-nav").addEventListener("click", () => {
  location.href = "contact.html";
});
// -----------------------------------

// Hanterar button ------------------------
document.querySelector("#navigate-button").addEventListener("click", onClick);

function onClick() {
  location.href = "search.html";
}

// Hamburgarmeny ------------------------------

let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav");
let headerTxt = document.querySelector("#header-text");
let navButton = document.querySelector("#navigate-button");


// Öppnar och stänger hamburgarmenyn
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ---------------------------------------------
