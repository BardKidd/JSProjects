const foods = document.getElementById("foods");
const meal = document.getElementById("oneMeal");
const meal_img = document.getElementById("oneMeal_img");
const meal_title = document.getElementById("oneMeal_title");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");

meal.style.display = "none"; // 還沒取出資料前先隱藏卡片

let initNum = 1;
foods.addEventListener("wheel", (e) => {
  e.preventDefault();
  let lastNum = initNum;

  // deltaY 往上滾是正數，往下滾是負數
  initNum += e.deltaY * -0.01;

  if (initNum > lastNum) {
    foods.scrollLeft -= 10;
  } else {
    foods.scrollLeft += 10;
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getMealsBySearch(searchInput.value);
  searchInput.value = "";
});

searchIcon.addEventListener("click", () => {
  if (searchInput) {
    getMealsBySearch(searchInput.value);
    searchInput.value = "";
  }
});

// 隨機產出餐點資料
async function getRandomMeal() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const resData = await res.json();
  const randomMeal = resData.meals[0];
  meal.style.display = "none";
  getIngredient(randomMeal);
}

// 取得成分
async function getIngredient(ingredient) {
  meal.style.display = "flex";
  meal_img.src = ingredient.strMealThumb;
  meal_title.innerText = ingredient.strMeal;

  const mealValues = Object.values(ingredient);
  const mealKeys = Object.keys(ingredient);
  foods.innerHTML = "";

  mealKeys.forEach((key, index) => {
    if (key.match("strIngredient") && mealValues[index]) {
      const roundTemplate = document.createElement("div");
      roundTemplate.classList.add("foods_sort");
      roundTemplate.innerHTML = `
        <img class='round' src='https://www.themealdb.com/images/ingredients/${mealValues[index]}-Small.png' alt='${mealValues[index]}' />
        <span>${mealValues[index]}</span>
      `;
      foods.appendChild(roundTemplate);
    }
  });
}

// 搜尋餐點
async function getMealsBySearch(keyword) {
  const meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
  );
  const resData = await meals.json();
  const meal = resData.meals ? resData.meals[0] : null;
  if (meal) {
    meal_img.src = meal.strMealThumb;
    meal_title.innerText = meal.strMeal;
    getIngredient(meal);
  } else {
    alert("找不到該項食譜");
  }
}

getRandomMeal();
