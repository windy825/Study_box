const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list");
const TODOS_KEY = "todos";
let toDos = loadTodos();

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveTodos();
  li.remove();
}


function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function loadTodos() {
  const toDos = localStorage.getItem(TODOS_KEY)
  if (toDos !== null) {
    const parsedTodos = JSON.parse(toDos);
    parsedTodos.forEach(paintToDo);
    return parsedTodos;
  } else {
    return [];
  }
}



function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  
  const button = document.createElement("button");
  button.innerText = "DELETE";
  button.addEventListener("click", deleteTodo);
  
  li.append(span, button);
  toDoList.appendChild(li);
}



function toDoSubmit(event) {
  event.preventDefault();
  const newTodo = { id: Date.now(), text: toDoInput.value };
  event.target.reset();
  toDos.push(newTodo);
  saveTodos(newTodo);
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", toDoSubmit);