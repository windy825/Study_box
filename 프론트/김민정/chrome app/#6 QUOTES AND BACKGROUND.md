# #6 QUOTES AND BACKGROUND

* Randomness

  * Math module: JavaScript에서 이미 load 됨 -- 무료로 사용가능
  * `Math.random()` : 0~1 사이 random한 숫자
  * `Math.random() * 10`: 0~10 사이 random 숫자 (실수(float))
  * **실수** -> **정수**
    * `Math.round(1.5)`: 반올림( =2)
    * `Math.ceil(1.4)`: 올림( =2)
    * `Math.floor(1.7)`: 내림( =1)

  * `Math.floor(Math.random() * 10)`

  * ```js
    console.log(quotes[Math.floor(Math.random() * quotes.length)])
    ```



***

### [참고]

* lodash
  * `_.range(1, 46)` : [1, 2, 3, ..., 45]
  * `_.sampleSize(array, 3)`: array 중에서 3개를 random하게 추출