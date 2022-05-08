# #4 LOGIN

* `app.js`, `index.html`, `style.css` 초기화

* ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum App</title>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
  </html>
  ```

* ```html
  <input required maxlength="15" type="text" placeholder="What is your name">
  ```

* input의 유효성 검사를 작동시키기 위해서는 input이 form 안에 있어야 한다.

* onLoginSubmit() : `()`은 function을 **즉시** 실행한다는 뜻! --> addEventListener로 함수를 불러올 때는 쓰지 않는다.



* form의 기본동작은 **submit**
* link의 기본 동작은 **클릭 시 다른 페이지로 이동**



* `localStorage`: 우리가 브라우저에 뭔가를 저장할 수 있게 해준다. --> 나중에 가져다 쓸 수 있다.

* ```js
  localStorage.setItem("username", "minjeong")	// 저장
  localStorage.getItem("username")	// 가져오기
  localStorage.removeItem("username")	// 지우기
  ```

* 개발자도구 > Application > Storage > Local Storage에서 확인 가능



* 반복되는 string은 const 변수로 지정해두기 (**대문자**) -- 오타 때문에
* 