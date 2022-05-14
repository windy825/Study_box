# Nomadcoder 바닐라 JS Challenge

> Day 6 of 15



### 질문

1. From JS we can get elemetns from the HTML.
2. What object do we use to access HTML from JS?
3. How can I find the `#title` with JS?
4. How can I find all the `.button` with JS?
5. How can I find all the `<a>`?
6. How can I find all the `.home h1:first-child`?
7. How can I find the first `.home h1:first-child`?
8. We can change the CSS of an element from JS.
9. Will this work? `btn.addEventListener("click", handler())`
10. Will this work? `btn.addEventListener("click", handler)`
11. `document` and `window` are the same.
12. What is the difference between using `className` and `classList` 
13. What does `classList.toggle` do?



### 답

1. y
2. document
3. document.getElemetnById("title")
4. document.getElementsByClassNmae("button")
5. document.getElementsByTagName("a")
6. document.querySelectorAll(".home h1:first-child")
7. document.querySelector(".home h1:first-child")
8. y
9. n
10. y
11. n
12. className replaces all classes, classList doesn't
13. It adds a class if it does not exist and removes a class that exists.

