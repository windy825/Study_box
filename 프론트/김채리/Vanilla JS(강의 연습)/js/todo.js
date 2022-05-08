const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event) {
  const li = event.target.parentElement
  li.remove()
  console.log(li.id)
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveTodos()
}

function paintTodo(newTodo) {
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.innerText = newTodo.text
  const button = document.createElement("button")
  button.innerText = "X"
  button.addEventListener("click", deleteTodo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}


function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ""
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj)
  paintTodo(newTodoObj)
  saveTodos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos)
  toDos = parsedToDos
  parsedToDos.forEach(paintTodo)
}
