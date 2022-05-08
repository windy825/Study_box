const todoForm = document.querySelector('#todoForm')
const todoList = document.querySelector('#todoList')
const todoInput = document.querySelector('#todoForm input')
const TODOS_KEY = 'todos'

let toDos = []

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

const deleteTodo = (event) => {
  event.preventDefault()
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== Number(li.id))
}

const paintTodo = (newTodo) => {
  const li = document.createElement('li')
  li.id = newTodo.id
  const span = document.createElement('span')
  span.innerText = newTodo.text
  const btn = document.createElement('button')
  btn.innerText = '❌'
  btn.addEventListener('click', deleteTodo)
  li.append(span, btn)
  todoList.append(li)

}

const todoSubmit = (event) => {
  event.preventDefault()
  const newTodo = todoInput.value
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintTodo(newTodoObj)
  saveTodos()
  // localStorage.setItem(TODO_KEY, newTodo)
  event.target.reset()
}

todoForm.addEventListener('submit', todoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos !== null ) {
  const parsedTodos = JSON.parse(savedTodos)
  toDos = parsedTodos
  parsedTodos.forEach(paintTodo)
}