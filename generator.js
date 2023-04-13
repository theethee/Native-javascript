// HANTERA NAV------------------------

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

const mealRes = document.querySelector("#mealContainer");
const mealName = document.querySelector("#meal-name");
const picUnsplash = document.querySelector("#pic-of-random-meal");

const url = "https://www.themealdb.com/api/json/v1/1/random.php";
const button = document.querySelector("#formButton");
button.addEventListener("click", handleSearch);

function handleSearch() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let getMeal = data.meals[0];

      console.log(getMeal);

      let ingredients = [];

      let number = 1;

      for (let i in getMeal) {
        if (i.startsWith("strIngredient") && getMeal[i]) {
          ingredients.push(
            `${getMeal[i]} - ${getMeal["strMeasure" + number]} `
          );
          number++;
        }
      }

      mealRes.innerHTML = `

    <div id="result-pic-div"><img src=${getMeal.strMealThumb} id="result-pic" alt="picture-of-meal"></div>

    <div id="meal-name-div"><h2 id="meal-name">${getMeal.strMeal}</h2></div>
    <div id="ingredients-header-div"><h4>Ingredients: </h4></div>

    <div id="ul-center"><ul id="ul-ingredients"></ul></div>
    <div id="instructions-header-div"><h4>Instructions: </h4></div>
    <div id="div-instructions"><p id="p-instructions">${getMeal.strInstructions}</p></div>

    </div>
    `;

      for (let j = 0; j < ingredients.length; j++) {
        let createLi = document.createElement("li");
        createLi.innerText = ingredients[j];
        document.querySelector("#ul-ingredients").appendChild(createLi);
      }
    });
}

// -----------------------------------------

let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ---------------------------------------
