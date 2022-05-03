### prompt function

```js
const age = prompt("How old are you?")
```

- 프롬프트 창을 띄워서 값(문자열)을 입력받음
- 내부의 문자열은 프롬프트 창에 출력됨
- 이 창이 띄워져 있는 동안, 값이 입력되기 전까지는 브라우저가 정지된다.(코드가 더이상 진행되지 않음)
- CSS가 적용되지 않기 때문에, 버튼의 수정 등이 불가능하며, 때문에 일부 브라우저에서는 사용이 제한되어 있음
- 매우 오래된 방법

<br>

### parseInt()

```js
const age = "10"
console.log(typeof parseInt(age))
```

- 문자열을 정수로 바꿔줌
- 숫자 + 다른 문자열 형태로 입력된 경우, 숫자까지만 자름.
  - 즉, 17.1의 경우 .은 숫자가 아니므로 . 이후가 제거되고 숫자로 바뀜
  - 단, `-`나 `+`와 같은 **부호**의 경우가 숫자 앞에 하나만 붙어있는 경우는 음수로 인식됨
- 문자열이 정수가 아니라면 NaN이 반환됨
  - 문자열 + 숫자의 형태라면, 시작이 숫자가 아니므로 NaN이 반환됨

<br>

### isNaN()

```js
console.log(isNaN(10))		// false
```

- 인자가 NaN이라면 true, 아니라면 false 반환

<br>

### Element.getElementById()

```js
const title = document.getElementById('title')
```

- 해당 id를 가진 단일 엘리먼츠 반환

<br>

### Element.getElementByClassName()

```js
const hellos = document.getElementByClassName('hello')
```

- 해당 class를 가진 엘리먼츠를 담은 리스트를 반환

<br>

### Element.getElementByTagName()

```js
const title = document.getElementByTagName('h1')
```

- 해당 tag인 엘리먼츠들을 담은 리스트를 반환

<br>

### Event

- mouseenter : 마우스가 범위 밖에서 범위 안으로 이동했을 때
- mouseleave : 마우스가 범위 안에서 범위 밖으로 이동했을 때

<br>

