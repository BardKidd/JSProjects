const quizData = [
  {
    title: "高雄最高的山是哪座?",
    a: "玉山",
    b: "壽山",
    c: "柴山",
    d: "觀音山",
    correct: "a",
  },
  {
    title: "高雄市居民身分證開頭為何?",
    a: "D",
    b: "Z",
    c: "B",
    d: "E",
    correct: "d",
  },
  {
    title: "高雄軟體科學園區在哪?",
    a: "小港區",
    b: "前鎮區",
    c: "楠梓區",
    d: "沒有這個園區",
    correct: "b",
  },
  {
    title: "以下何者為高雄的別稱?",
    a: "雞籠",
    b: "大稻埕",
    c: "打狗",
    d: "草山",
    correct: "c",
  },
  {
    title: "高雄紅毛港遷村地點為何?",
    a: "臨海新村",
    b: "大林蒲",
    c: "大坪頂",
    d: "沒有遷村這件事...",
    correct: "b",
  },
];

let current = 0;
let score = 0;

const quizBox = document.getElementById("quizBox");
const quitTitle = document.getElementById("quizTitle");
const ans1_text = document.getElementById("ans1_text");
const ans2_text = document.getElementById("ans2_text");
const ans3_text = document.getElementById("ans3_text");
const ans4_text = document.getElementById("ans4_text");
const radioBtns = document.querySelectorAll(".radioBtn");

const btn = document.getElementById("submit");

function initQuiz() {
  let currentQuiz = quizData[current];
  quitTitle.innerText = currentQuiz.title;
  ans1_text.innerText = currentQuiz.a;
  ans2_text.innerText = currentQuiz.b;
  ans3_text.innerText = currentQuiz.c;
  ans4_text.innerText = currentQuiz.d;
}
initQuiz();

btn.addEventListener("click", () => {
  // 有無選取的 flag
  let flag = false;
  radioBtns.forEach((btn) => {
    if (btn.checked) {
      flag = true; // 有被選到就變為 true
      btn.checked = false;
      if (btn.value === quizData[current].correct) {
        score++;
      }
    }
  });

  // 都沒選取選項的話就強制停止 function
  if (!flag) return false;

  current++;

  // 目前題目不等於最後一題就會更新題目
  if (current !== quizData.length) {
    initQuiz();
  }

  // 全部完成顯示以下 template
  if (current === quizData.length) {
    quizBox.innerHTML = `
    <h2>測驗完成，你的得分為${score}/${quizData.length}</h2>
    <button type="button" onClick="location.reload()">重新測驗</button>
    `;
  }
});
