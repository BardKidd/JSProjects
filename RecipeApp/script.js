const foods = document.getElementById("foods");

// foods.addEventListener("scroll", (e) => {
//   console.log(foods.scrollTop);
//   console.log(window);
// });
foods.addEventListener("wheel", (e) => {
  foods.scrollLeft += 5;
  e.preventDefault();
  //   console.log(foods.scrollLeft);
});
