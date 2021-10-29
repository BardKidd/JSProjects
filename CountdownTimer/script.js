// 宣告
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let seconds = document.getElementById("seconds");

let newYears = new Date("2022-01-01 00:00:00").getTime();
function diff() {
  const now = new Date().getTime();
  const diffTime = newYears - now;

  // 取得該數的最大整數
  const getSeconds = Math.floor((diffTime / 1000) % 60);
  const getMins = Math.floor((diffTime / 1000 / 60) % 60);
  const getHours = Math.floor((diffTime / 1000 / 60 / 60) % 24);
  const getDays = Math.floor(diffTime / 1000 / 60 / 60 / 24);

  days.innerHTML = getDays;
  hours.innerHTML = getHours;
  mins.innerHTML = getMins;
  seconds.innerHTML = getSeconds;
}
setInterval(() => {
  diff();
}, 1000);
