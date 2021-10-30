const foods = document.getElementById("foods");

let initNum = 1;

foods.addEventListener("wheel", (e) => {
  e.preventDefault();
  let lastNum = initNum;

  // deltaY 往上滾是正數，往下滾是負數
  initNum += e.deltaY * -0.01;

  // 如
  if (initNum > lastNum) {
    foods.scrollLeft -= 10;
  } else {
    foods.scrollLeft += 10;
  }
});
