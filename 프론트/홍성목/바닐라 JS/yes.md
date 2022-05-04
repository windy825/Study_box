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
- resize : 해당 엘레멘츠의 크기가 변경되었을 때(따라서 window에만 적용할 수 있는듯)
- `Clipboard events` : 클립보드와 관련된 이벤트. window에만 적용 가능
  - copy : 사용자가 복사를 했을 때
  - cut : 사용자가 잘라내기를 했을 때
  - paste : 사용자가 붙여넣기를 했을 때

- `Connection events` : 사용자가 인터넷에 연결되어 있는지를 판단. window에만 사용 가능
  - offline : 네트워크와의 연결이 없을 때
  - online : 네트워크에 연결되어 있을 때


<br>

### Event 변형

```js
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// 변형 후. 그다지 좋은 방법은 아닌듯?
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;
```

<br>

### toggle

```js
function handleTitleClick() {
  if (h1.classList.contains("active")) {
    h1.classList.remove("active");
  } else {
    h1.classList.add("active");
  }
}

// 이를 토글로 바꾸면 아래와 같다
function handleTitleClick() {
  h1.classList.toggle("active");
}
```

- ClassList에 해당 class가 있으면 삭제하고, 없으면 추가해준다.

<br>

### localStorage

- 브라우저의 저장공간. 브라우저 API
- 정보가 key-value 형태로 저장된다.(Object?)
  - 오로지 문자만 저장할 수 있다.

- Application 탭에서 확인할 수 있다.

- localStorage.setItem

  - localStorage에 해당 이름으로 정보를 저장해준다.

  - ```js
    localStorage.setItem(`저장할 이름`, `저장할 정보`)
    ```

  - 반환 값은 없으며, 해당 이름이 이미 존재할 경우, 값을 덮어씌운다.

- localStorage.getItem

  - localStorage에서 해당 이름을 가진 정보를 찾아온다

  - ```js
    localStorage.getItem(`저장된 이름`)
    ```

  - 찾아온 정보를 반환한다. 해당하는 이름이 없다면 null을 반환한다.

- localStorage.removeItem

  - localStorage에서 해당 이름을 가진 정보를 삭제한다.

  - ```js
    localStorage.removeItem(`저장된 이름`)
    ```

  - 반환 값은 없다.

<br>

### Time

- setInterval(func, time)
  - 원하는 함수를 원하는 ms 간격으로 반복하여 실행
- setTimeout(func, time)
  - 원하는 함수를 원하는 ms가 지난 후 한 번 만 실행

<br>

### padStart

- String.padStart(length, string)

  - 문자열의 길이가 원하는 길이보다 짧을 경우, 원하는 길이가 될 때까지 문자열의 앞에 지정된 문자를 추가한다.

  - 길이가 더 길 경우, 추가 없이 원래 값이 반환된다.

  - 지정할 문자의 경우, 여러자리의 문자여도 상관 없으며, 채울 자리보다 지정한 문자의 길이가 더 짧아도 뒷 부분을 무시하고 수행한다.

  - ```js
    "12121212".padStart(11, "pdpd")
    // "pdp12121212"
    ```

- String.padEnd(length, string)
  - padStart와 비슷한 원리로 뒤에서부터 문자를 채운다.

<br>

### Math Module

- Math.random()
  - 0에서 1사이의 float를 반환한다.
- Math.round(num)
  - 소수점 이하를 반올림 해준다.
- Math.ceil(num)
  - 소수점 이하를 올림 해준다.
- Math.floor(num)
  - 소수점 이하를 내림 해준다.

<br>

 ### navigator

- navigator.geolocation.getCurrentPosition(func1, func2)
  - 위치 정보를 수신하며, load 완료시 func1, 실패시 func2를 실행한다.
  - 위치 정보는 각 콜백 함수에 첫번째 인자로 넘어가며, .coords에 .latitude, .longitude로 위도와 경도를 알 수 있다.

<br>

### 기타

- `transition: color 0.5s ease-in-out;` : CSS에 기입할 수 있다. 색을 0.5초동안 천천히 바꾸는듯?

- input의 속성으로 넣을 수 있는 것
  - required : 필수적으로 입력하도록 지정(빈값은 안 된다)
  - maxlength="(int)" : 최대 글자 수

- 반복사용하는 문자열 등의 경우를 변수로 저장하는 이유
  - 문자열을 잘못 입력한 경우, 이는 오류가 발생하지 않고 결과만 틀리게 나오므로 어느 부분이 틀렸는지 찾기 힘들다
  - 하지만 변수에 저장하여 변수명을 활용할 경우, 변수 이름을 잘못 적었을 때 해당 변수를 찾지 못하여 console에서 오류를 확인할 수 있으므로 디버깅하기 쉬워진다.
- event.target에는 여러 속성(property)이 있는데, 그 중 parentElement를 사용하면 event target의 부모 노드를 알 수 있다.

<br>

---

### 참고자료

- 무료 사진 API 서비스
  - https://justmakeyourself.tistory.com/entry/free-available-image-api
- BackgroundImage
  - https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
- 기상청 API
  - https://data.kma.go.kr/api/selectApiList.do?pgmNo=42
  - https://blog.naver.com/dt3141592/222188401518
  - 번거로워 보여서 pass
- 기상 정보 API
  - https://openweathermap.org/
  - 회원 가입, 이메일 인증 후 조금 지난 뒤부터 API key를 사용 가능하므로 주의
