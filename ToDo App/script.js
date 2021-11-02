const form = document.getElementById("from");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text) {
    const todoEl = document.createElement("li");
    todoEl.innerText = text;
    todos.appendChild(todoEl);

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("isFinish");
    });

    input.value = "";
  }
});
