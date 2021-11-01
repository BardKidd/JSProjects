const foods = document.getElementById("foods");
const meal = document.getElementById("oneMeal");
const meal_img = document.getElementById("oneMeal_img");
const meal_title = document.getElementById("oneMeal_title");

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

meal.style.display = "none";
// 隨機產出餐點資料
async function getRandomMeal() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const resData = await res.json();
  const randomMeal = resData.meals[0];
  meal.style.display = "flex";

  meal_img.src = randomMeal.strMealThumb;
  console.log(randomMeal);
}

// 取得餐點 By Id
async function getMealById(id) {
  const meal = await fetch(
    `"https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
}

// 搜尋餐點
async function getMealsBySearch(keyword) {
  const meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
  );
}

// 取得餐點成分縮圖
async function getIngredientThumbnail(name) {
  const Ingredient =
    await fetch(`www.themealdb.com/images/ingredients/${name}-Small.png
  `);
}

getRandomMeal();
