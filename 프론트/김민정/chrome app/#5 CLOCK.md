# #5 CLOCK

* devide and conquer 방식

* interval: **매번** 일어나야 하는 것

  ```js
  function sayHello() {
    console.log("hello")
  }
  
  setInterval(sayHello, 5000)	// 5초마다 한 번식 console에 "hello" print
  ```

* timeout: **한 번만** 함수 불러오는 것

  ```js
  function sayHello() {
    console.log("hello")
  }
  
  setTimeout(sayHello, 5000)
  ```



***

* `new Date()` : 현재 날짜, 시각 보여준다.

  ```js
  const date = new Date()
  
  date.getDay() 		//0(일요일)
  date.getDate() 		//8(5월 8일)
  date.getFullYear() 	//2022
  date.getHours()		//14 (2시)
  date.getMinutes()	//24 (24분)
  date.getSeconds()	// 매초
  ```

* clock.js

  ```js
  const clock = document.querySelector('h2#clock')
  
  
  function getClock() {
    const date = new Date()
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }
  
  
  getClock()	// 화면을 켜자마자 바로 시간이 보이게 하기 위해서
  setInterval(getClock, 1000)	// 화면이 켜지고 1초 뒤부터 시간이 보임
  ```



***

* `padStart()`: string에 쓸 수 있는 function

* ```js
  "1".padStart(2, "0")	//01
  // 1이라는 숫자를 길이가 2인 string으로 출력을 하는데, 길이가 2가 아니라면 앞에 0을 덧붙인다.
  "12".padStart(2, "0")	//12
  ```

* `padEnd()`

* ```js
  "1".padEnd(2, "0")	//10
  ```

* clock.js

  ```js
  function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
  
    clock.innerText = `${hours}:${minutes}:${seconds}`
  }
  ```



