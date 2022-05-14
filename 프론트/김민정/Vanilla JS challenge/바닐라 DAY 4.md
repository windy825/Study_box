# Nomadcoder 바닐라 JS Challenge

> Day 4 of 15



*✅ The text of the title should change when the mouse is on top of it.*

*✅ The text of the title should change when the mouse is leaves it.*

*✅ When the window is resized the title should change.*

*✅ On right click the title should also change.*

*✅ The colors of the title should come from a color from the colors array.*

*✅ DO NOT CHANGE .css, or .html files.*

*✅ ALL function handlers should be INSIDE of "superEventHandler"*



작성한 코드: https://codesandbox.io/s/day-three-blueprint-forked-125qqp

* index.js

  ```js
  // <⚠️ DONT DELETE THIS ⚠️>
  import "./styles.css";
  const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
  // <⚠️ /DONT DELETE THIS ⚠️>
  
  /*
  ✅ The text of the title should change when the mouse is on top of it.
  ✅ The text of the title should change when the mouse is leaves it.
  ✅ When the window is resized the title should change.
  ✅ On right click the title should also change.
  ✅ The colors of the title should come from a color from the colors array.
  ✅ DO NOT CHANGE .css, or .html files.
  ✅ ALL function handlers should be INSIDE of "superEventHandler"
  */
  
  const h2 = document.querySelector("h2");
  
  const superEventHandler = {
    handleMouseOn() {
      h2.innerText = "The mouse is here!";
      h2.style.color = colors[0];
    },
    handleMouseGone() {
      h2.innerText = "The mouse is gone!";
      h2.style.color = colors[1];
    },
    handleResize() {
      h2.innerText = "You just resized!";
      h2.style.color = colors[2];
    },
    handleRightClick() {
      h2.innerText = "That was a right click!";
      h2.style.color = colors[3];
    }
  };
  
  h2.addEventListener("mouseenter", superEventHandler.handleMouseOn);
  h2.addEventListener("mouseleave", superEventHandler.handleMouseGone);
  window.addEventListener("resize", superEventHandler.handleResize);
  window.addEventListener("contextmenu", superEventHandler.handleRightClick);
  ```

* style.css

  ```css
  body {
    font-family: sans-serif;
  }
  ```

* index.html

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Parcel Sandbox</title>
      <meta charset="UTF-8" />
    </head>
  
    <body>
      <h2>Hello!</h2>
      <script src="src/index.js"></script>
    </body>
  </html>
  ```

* 파일구조:

  * src
    * index.js
    * style.css
  * index.html
  * package.json