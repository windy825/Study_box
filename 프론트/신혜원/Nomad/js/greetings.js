const loginForm = document.querySelector('#loginForm')
const loginInput = loginForm.querySelector('input')
const h1 = document.querySelector('h1')
const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

const paintGreeting = function (username) {
  h1.innerText = `Hello ${username}`
  h1.classList.remove(HIDDEN_CLASSNAME)
}

const onLoginSubmit = (event) => {
  event.preventDefault()
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  h1.innerText = `Hello ${username}`
  h1.classList.remove(HIDDEN_CLASSNAME)
}



/* Local Storage = user info 를 저장하는 곳. (가장 쉬운 방법)
localStorage.setItem('username', 'hyewon') key(username)에 value(hyewon)을 저장 // CREATE

localStorage.getItem('username') // READ

localStorage.removeItem('username') // DELETE

*/


const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  paintGreeting(savedUsername)
}