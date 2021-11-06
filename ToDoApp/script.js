const form = document.getElementById("from");
const input = document.getElementById("input");
const todos = document.getElementById("todos");
const savedItem = JSON.parse(localStorage.getItem("todos")) || [];

if (savedItem.length > 0) {
  savedItem.forEach((todo) => {
    addTodo(todo);
  });
}

// 新增項目
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  const text = input.value || todo.text;

  if (text) {
    const todoEl = document.createElement("li");
    if (todo && todo.isFinish) {
      todoEl.classList.toggle("isFinish");
    }
    todoEl.innerText = text;

    todos.appendChild(todoEl);

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("isFinish");
      setToLocalStorage();
    });
    input.value = "";
    setToLocalStorage();
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      setToLocalStorage();
    });
  }
}

function setToLocalStorage() {
  const liArr = document.querySelectorAll("li");

  let tempArr = [];
  liArr.forEach((item) => {
    tempArr.push({
      text: item.innerText,
      isFinish: item.classList.contains("isFinish"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(tempArr));
}
