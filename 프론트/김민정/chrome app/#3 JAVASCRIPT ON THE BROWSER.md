# #3 JAVASCRIPT ON THE BROWSER

## #3.0 The Document Object

* HTML의 element들을 JavaScript를 통해 변경하고 읽을 수 있다.
* JavaScript에서 HTML document 객체로부터 title을 가지고 올 수 있다.
  * console에서 `document.title` 입력하면 HTML을 읽어온다.
* HTML 코드를 JavaScript 관점으로 보고 있는 것이다.



## #3.2 Searching For Element

* getElementsByClassName()

  ```js
  const hellos = document.getElementsByClassName("hello");
  console.log(hellos) // array 형태
  ```

* getElementsByTagName(): 얘도 object가 아니라 array 형태

* querySelector(): element를 CSS 형태로 가져올 수 있다.

  ```JS
  const title = document.querySelector(".hello h1");	// "hello" class 내부에 있는 "h1" tag
  ```

* querySelectorAll()

* 거의 대부분 querySelector나 querySelectorAll을 사용한다.



## #3.3 Events

* on ~~ : "event"
* JavaScript에서 대부분 할 일: event를 listen 하는 것!
* addEventListener()



## #3.5 More Events

* event 코드 두 가지

  1. `title.addEventListener("click", handleTitleClick)`
  2. `title.onclick = handleTitleClick`

  * addEventListener를 더 선호: 나중에 removeEventListener 사용 가능

* window에도 event를 넣을 수 있다!!

  ```js
  window.addEventListener("resize", handelWindowResize)
  window.addEventListener("copy", handelWindowCopy)
  window.addEventListener("offline", handelWindowOffline)
  window.addEventListener("online", handelWindowOnline)
  ```

  

## #3.6 CSS in JavaScript

* style을 JavaScript에서 변경하는 것보다 CSS에서 변경하는 게 낫다!
* style: "CSS" / animation: "JavaScript"



## #3.7 CSS in JavaScript part Two

```js
const h1 = document.querySelector("body > div > h1")


function handleTitleClick() {
  if (h1.className === "active"){
    h1.className = ""
  }
  else {
    h1.className = "active"
  }
}

h1.addEventListener("click", handleTitleClick)
```

* 여기서 h1은 `getter`이자, `setter`
* class 이름을 바로 적어주는 것보다는 `const`를 써서 저장해두는 게 좋다.
* const를 쓰면 나중에 오타가 났을 때, 어떤 에러가 발생했는지 console에서 자세하게 알려준다.
* but, **bug**가 있다 --> class name을 아예 바꿔버리면 기존에 있던 class들이 없어진다.



## #3.8 CSS in JavaScript part Three

1. classList 사용

   ```js
   function handleTitleClick() {
     const clickedClass = "clicked"
     if (h1.classList.contains(clickedClass)){
       h1.classList.remove(clickedClass)
     }
     else {
       h1.classList.add(clickedClass)
     }
   }
   ```

2. toggle: classList에 class name이 포함되어 있으면 제거, 포함되어 있지 않으면 추가

   ```js
   function handleTitleClick() {
     // const clickedClass = "clicked"
     // h1.classList.toggle(clickedClass)
     h1.classList.toggle("clicked")	// 지금은 확인해야 하는 class가 한 개니까
   }
   ```

   

