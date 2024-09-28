const inputFild = document.querySelector("#input-fild");
const searchBtn = document.querySelector("#searchBtn");
const body = document.querySelector("body");
var recipe_button = document.querySelector(".button_container");
const recipe_info = document.querySelector(".recipe_info");
const item_box = document.querySelector(".item-box");
let foods = document.querySelectorAll(".item-containe");

const getRecipes = async (sortBy) => {
  const responce = await fetch(
    `https://dummyjson.com/recipes/search?q=${sortBy}`
  );

  const data = await responce.json();
  const recipes = data.recipes;

  let innerhtml = "";
  console.log(recipes);

  recipes.forEach((recipe) => {
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
      
          <button id="button" class="button_container">GET RECIPE</button>
        </div>
      </div>
      
        `;
  });

  item_box.innerHTML = innerhtml;
};

searchBtn.addEventListener("click", (e) => {
  const recipe_button = document.querySelector(".button_container");
  item_box.innerHTML = `<h2>Fetching Recipes.......</h2>
  <div class="loader"></div>
  `;
  const recipe_info = document.querySelector(".recipe_info");
  const sortBy = inputFild.value.trim();
  getRecipes(sortBy);
  inputFild.classList.toggle("active");

  recipe_button.addEventListener("click", () => {
    console.log("fsdf");
  });
});
