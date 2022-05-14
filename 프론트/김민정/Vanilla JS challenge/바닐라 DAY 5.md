# Nomadcoder 바닐라 JS Challenge

> Day 5 of 15



* 윈도우 창 크기를 변화시키면 화면의 색이 바뀌도록 js 파일 작성

작성한 코드: https://codesandbox.io/s/empty-blueprint-forked-zy66v9?file=/src/index.js



* index.js

  ```js
  const body = document.querySelector("body");
  body.innerText = "Hello!";
  body.style.color = "white";
  body.style.fontWeight = "bolder";
  body.style.backgroundColor = "tomato";
  
  function changeBackgrouncColor() {
    if (window.innerWidth < 576) {
      body.style.backgroundColor = "gold";
    } else if (window.innerWidth < 992) {
      body.style.backgroundColor = "limegreen";
    } else {
      body.style.backgroundColor = "fuchsia";
    }
  }
  
  window.addEventListener("resize", changeBackgrouncColor);
  ```

* index.html

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Vanilla Challenge</title>
      <meta charset="UTF-8" />
    </head>
  
    <body>
      <script src="src/index.js"></script>
    </body>
  </html>
  ```

* 파일구조: 

  * src
    * index.js

  * index.html
  * package.json




***

### 정답

* index.js

  ```js
  import "./styles.css";
  
  const body = document.body;
  
  const BIG_SCREEN = "bigScreen";
  const MEDIUM_SCREEN = "mediumScreen";
  const SMALL_SCREEN = "smallScreen";
  
  function handleResize() {
    const width = window.innerWidth;
    if (width > 1000) {
      body.classList.add(BIG_SCREEN);
      body.classList.remove(MEDIUM_SCREEN);
    } else if (width <= 1140 && width >= 700) {
      body.classList.add(MEDIUM_SCREEN);
      body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
    } else {
      body.classList.remove(MEDIUM_SCREEN);
      body.classList.add(SMALL_SCREEN);
    }
  }
  
  window.addEventListener("resize", handleResize);
  ```

* style.css

  ```css
  body {
    font-family: sans-serif;
    display: flex;
  }
  
  h2 {
    color: white;
  }
  
  .bigScreen {
    background-color: #f1c40f;
  }
  
  .mediumScreen {
    background-color: #9b59b6;
  }
  
  .smallScreen {
    background-color: #3498db;
  }
  ```

  