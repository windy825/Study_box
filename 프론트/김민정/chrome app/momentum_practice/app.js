// const h1 = document.querySelector("body > div > h1")


// function handleTitleClick() {
//   const currentColor = h1.style.color
//   let newColor
//   if (currentColor === "blue") {
//     newColor = "tomato"
//   }
//   else {
//     newColor = "blue"
//   }
//   h1.style.color = newColor
// }


// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!"
// }


// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!"
// }


// function handelWindowResize() {
//   document.body.style.backgroundColor = "tomato"
// }


// function handelWindowCopy() {
//   alert("copier!")
// }


// function handelWindowOffline() {
//   alert("SOS no WIFI")
// }


// function handelWindowOnline() {
//   alert("Good WIFI")
// }


// // title.addEventListener("click", handleTitleClick)
// // title.addEventListener("mouseenter", handleMouseEnter)
// // title.addEventListener("mouseleave", handleMouseLeave)
// h1.onclick = handleTitleClick
// h1.onmouseenter = handleMouseEnter
// h1.onmouseleave = handleMouseLeave


// window.addEventListener("resize", handelWindowResize)
// window.addEventListener("copy", handelWindowCopy)
// window.addEventListener("offline", handelWindowOffline)
// window.addEventListener("online", handelWindowOnline)


// 이제부터 style은 css에서, animation은 js에서 처리할 것!
const h1 = document.querySelector("body > div > h1")


function handleTitleClick() {
  // const clickedClass = "clicked"
  // h1.classList.toggle(clickedClass)
  h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleTitleClick)