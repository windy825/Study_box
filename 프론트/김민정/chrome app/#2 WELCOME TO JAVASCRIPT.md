# #2 WELCOME TO JAVASCRIPT

* 브라우저는 HTML을 열고, HTML은 CSS와 JavaScript를 가져온다.

* HTML이 접착제 역할을 한다.
  * HTML을 읽어보면 CSS와 자바스크립트를 가져오는 것을 알 수 있고, 그래서 브라우저에서 해당 코드들을 적용시킬 수 있는 것이다.

* 자바스크립트는 주로 끝에서 가져온다. (body tag 안에서)

  ```html
  <script src="app.js"></script>
  ```

* 보통 .html 파일 안에서 css와 javascript를 다 적었는데, 이제부터는 `.js`, `.html`, `.css` 파일을 각각 만들어서 프로젝트를 한다.



## #2.2 Variables

* 문자열(string): `''`, `""` 둘 다 사용 가능하다.
* variable 이름에는 공백이 들어갈 수 없다. (camelCase)
* python: `very_long_variable_name = 0` (snake_case)
* JavaScript: `const veryLongVariableName = 0`



## #2.3 const and let

* var
  * 언어를 통한 보호를 받지 못한다.
  * 실수로 값을 업데이트해도, 언어가 말해주지 않는다 (에러가 나지 않는다).
  * --> const, let을 만든 이유
* let: 업데이트가 허용되어야 하는 변수의 경우에 사용

* const, let을 사용하면 코드에서 의미를 바로 찾을 수 있다.

* **규칙**: 기본적으로 const를 쓰고 필요할 때만 let을 쓰되, var는 쓰지 말 것!



## #2.4 Boolean

* null: 아무것도 없는 것으로 채웠다. (비어있는 것 x, 아무것도 없는 것으로 채워진 것 o)

  ```js
  const a = null;
  console.log(a); // null
  ```

* undefined: variable은 존재하지만 값이 없다. (공간은 있는데 값이 들어가지 않은 것)

  ```js
  let something;
  console.log(something);	// undefined
  ```

* (파이썬): null 대신 None, true 대신 True, false 대신 False



## #2.5 Arrays

* array: python에서의 `list`

  ```js
  const nonsense = [1, 2, 'hello', false, null, true, undefined, '']
  console.log(nonsense[1234234]) // undefined
  ```



## #2.6 Objects

* object: python에서의 `dictionary`

  ```js
  const fruit = {
      name: "apple",
      color: "red",
      taste: true,
      price: 1000,
  };
  console.log(fruit["name"]);
  console.log(fruit.name);
  
  fruit.color = "green"	// 재할당이 아니기 때문에 가능
  fruit.season = "autumn"
  ```

  

## #2.13 Conditionals

* prompt(message, default): 사용자에게 창을 띄울 수 있게 한다.

  ```js
  const age = prompt("How old are you?")	// javascript를 일시정지 시키고 있다.
  console.log(age)
  ```

* prompt를 쓰지 않는 이유: 

  * message가 예쁘지 않고 css를 적용시킬 수 없다(버튼도 변경 불가).
  * 어떤 브라우저는 이러한 팝업을 제한하기도 한다.
  * 아주 오래된 기능
  * `cancel` 버튼을 누르면 console.log(age) 부분에 `null` 출력

* parseInt()

  ```js
  const age = prompt("How old are you?");
  
  console.log(age, parseInt(age));
  ```

  * 15를 입력하면 `15(string) 15(number)` 출력 --> 이 숫자가 어떤 수보다 큰지 작은지 비교할 수 있다.
  * 숫자가 아닌 다른 것을 입력하면 `sljfdksjfks NaN` 출력
  * `NaN`: Not a Number(숫자가 아니다)
  * `isNaN()`: 
    * boolean을 반환한다.
    * 숫자(number)가 아니면 `true` 반환, 숫자이면 `false` 반환



## #2.15 Conditionals part Three

* or: `||`
* and: `&&`

