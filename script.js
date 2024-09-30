const inputFild = document.querySelector("#input-fild");
const searchBtn = document.querySelector("#searchBtn");
const body = document.querySelector("body");
var recipe_button = document.querySelector(".button_container");
const recipe_info = document.querySelector(".recipe_info");
const item_box = document.querySelector(".item-box");
let foods = document.querySelectorAll(".item-containe");

item_box.innerHTML = ` <h1>Search your favorite recipe</h1>`;

const getRecipes = async (sortBy) => {
  const responce = await fetch(
    `https://dummyjson.com/recipes/search?q=${sortBy}`
  );

  const data = await responce.json();
  const recipes = data.recipes;

  let innerhtml = "";
  console.log(recipes);

  console.log(recipe_button);

  if (recipes.length == "") {
    innerhtml += ` <h3>There is no recipe found</h3>`;
  } else {
    recipes.forEach((recipe, index) => {
      innerhtml += `
          <div class="item-containe" id="${recipe.id}">
            <div>
              <img class="img-container" src="${recipe.image}" alt="" />
            </div>
            <div class="price">
              <h3>${recipe.name}</h3>
             
             <div>
              <div><span>${recipe.rating}⭐</span> || <span>Review ${recipe.reviewCount}</span></div>
          
             </div>
             <h5>${recipe.tags[0]}🏷️<h5> 
          
              <button id="button" class="button_container" onclick="getDetails(${index})">GET RECIPE</button>
            </div>
          </div>
          
            `;
    });
  }

  item_box.innerHTML = innerhtml;
};

async function getDetails(index) {
  document.getElementById("recipe_info").style.display = "block";

  const responce = await fetch(`https://dummyjson.com/recipes`);

  const data = await responce.json();
  const recipes = data.recipes;

  recipe_info.innerHTML = `<span id="close" onclick="geclose()" class="material-symbols-outlined" > close </span>
        <h3>${recipes[index].name}</h3>
        <p>Food catagory:<span>${recipes[index].cuisine}</spam></p>
        <div>${recipes[index].ingredients}</div>

        <img class="image-info" src="${recipes[index].image}" alt="" />
        <h3>instructions:</h3>
        <p>
          Preheat the oven to 475°F (245°C).", "Roll out the pizza dough and
          spread tomato sauce evenly.", "Top with slices of fresh mozzarella and
          fresh basil leaves.", "Drizzle with olive oil and season with salt and
          pepper.", "Bake in the preheated oven for 12-15 minutes or until the
          crust is golden brown.", "Slice and serve hot.
        </p>`;
}

window.addEventListener("load", () => {
  getRecipes("");
});

function geclose() {
  // let oncl = document.querySelector("#close");
  document.getElementById("recipe_info").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  item_box.innerHTML = `<h2>Fetching Recipes.......</h2>
  <div class="loader"></div>
  `;

  const sortBy = inputFild.value.trim();
  getRecipes(sortBy);
  inputFild.classList.toggle("active");

  console.log();
});

// const searchRecipe = (recipe) => {
//   recipe_info.innerHTML = ` <span id="close" class="material-symbols-outlined"> close </span>
//         <h3>${recipe.name}</h3>
//         <p>Catagory Name</p>
//         <div>INGREDIANTS</div>

//         <img class="image-info" src="${recipe.image}" alt="" />
//         <h3>instructions:</h3>
//         <p>
//           Preheat the oven to 475°F (245°C).", "Roll out the pizza dough and
//           spread tomato sauce evenly.", "Top with slices of fresh mozzarella and
//           fresh basil leaves.", "Drizzle with olive oil and season with salt and
//           pepper.", "Bake in the preheated oven for 12-15 minutes or until the
//           crust is golden brown.", "Slice and serve hot.
//         </p>`;
// };
