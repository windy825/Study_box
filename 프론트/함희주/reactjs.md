# ReactJS로 영화 웹 서비스 만들기



## 0. Tutorial

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script>
    const root = document.querySelector("#root");
    const h3 = React.createElement(
      "h3",
      {
        onMouseEnter: () => console.log("mouse enter"),
        style: { color: "tomato" },
      },
      "Hello I'm a span"
    );
    const btn = React.createElement(
      "button",
      {
        onClick: () => console.log("im clicked"),
      },
      "Click me"
    );
    const container = React.createElement("div", null, [h3, btn]); // 태그, 속성, 내용
    ReactDOM.render(container, root);
  </script>
</html>
```

`<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>`

`<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>`

`React.createElement("태그", {속성}, [내용])`

`ReactDOM.render()`



---



## 1. JSX

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.querySelector("#root");
    const Title = () => (
      <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        Hello I'm a title
      </h3>
    );
    const Button = () => (
      <button
        style={{ backgroundColor: "tomato" }}
        onClick={() => console.log("button clicked")}
      >
        Click me
      </button>
    );
    const Container = () => (
      <div>
        <Title />
        <Button />
      </div>
    );
    ReactDOM.render(<Container />, root); // 컴포넌트의 첫 글자는 대문자
  </script>
</html>
```

컴포넌트로 작성

컴포넌트의 첫 글자는 대문자

babel 사용

script 태그에 `type="text/babel"` 작성

`<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>` 삽입



---



## 2. render

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.querySelector("#root");
    let counter = 0;
    function countUp() {
      counter += 1;
      render(); // 카운터 증가할 때마다 렌더링
    }
    function render() {
      ReactDOM.render(<Container />, root); // 변경 부분만 렌더링
    }
    const Container = () => (
      <div>
        <h3>Total Clicks: {counter}</h3>
        <button onClick={countUp}>Click me</button>
      </div>
    );
    render();
  </script>
</html>
```

값이 변경될 때마다 모든 컴포넌트가 다시 렌더링 되기 때문에 render 함수를 정의해 봄



`React.useState(초기값)`

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.querySelector("#root");
    function App() {
      const [counter, setCounter] = React.useState(0); // 초기값, 그 값을 변경하는 함수
      const onClick = () => {
        // setCounter(counter + 1);
        setCounter((current) => current + 1);
      };
      return (
        <div>
          <h3>Total Clicks: {counter}</h3>
          <button onClick={onClick}>Click me</button>
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```

`function App() {}` 으로 변경

값을 변경할 때는 해당 변수를 직접 변경하지 않고 modifier를 이용해 변경



---



## 3. 시 분 변환기

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.querySelector("#root");
    function App() {
      const [amount, setAmount] = React.useState();
      const [inverted, setInverted] = React.useState(false);
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0);
      const onInvert = () => {
        reset();
        setInverted((current) => !current);
      };
      return (
        <div>
          <h1 className="hi">Super Converter</h1>
          <div>
            <label htmlFor="minutes">Minutes</label>
            <input
              value={inverted ? amount * 60 : amount}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
              disabled={inverted}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours</label>
            <input
              value={inverted ? amount : Math.round(amount / 60)}
              id="hours"
              placeholder="Hours"
              type="number"
              onChange={onChange}
              disabled={!inverted}
            />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onInvert}>
            {inverted ? "Turn back" : "Invert"}
          </button>
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```



킬로미터 마일 변환기 추가

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.querySelector("#root");

    function MinutesToHours() {
      const [amount, setAmount] = React.useState();
      const [inverted, setInverted] = React.useState(false);
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0);
      const onInvert = () => {
        reset();
        setInverted((current) => !current);
      };
      return (
        <div>
          <h3>M 2 H</h3>
          <div>
            <label htmlFor="minutes">Minutes</label>
            <input
              value={inverted ? amount * 60 : amount}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
              disabled={inverted}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours</label>
            <input
              value={inverted ? amount : Math.round(amount / 60)}
              id="hours"
              placeholder="Hours"
              type="number"
              onChange={onChange}
              disabled={!inverted}
            />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onInvert}>
            {inverted ? "Turn back" : "Invert"}
          </button>
        </div>
      );
    }

    function KmToMiles() {
      return <h3>KM 2 M</h3>;
    }

    function App() {
      const [index, setIndex] = React.useState("0");
      const onSelect = (event) => {
        setIndex(event.target.value);
      };
      return (
        <div>
          <h1>Super Converter</h1>
          <select value={index} onChange={onSelect}>
            <option value="0">Minutes & Hours</option>
            <option value="1">Km & Miles</option>
          </select>
          {index === "0" ? <MinutesToHours /> : null}
          {index === "1" ? <KmToMiles /> : null}
        </div>
      );
    }

    ReactDOM.render(<App />, root);
  </script>
</html>
```



---



## 4. Props

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    // function Btn(props) {
    // 인자는 props 하나
    function Btn({ banana, big }) {
      console.log(banana);
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: big ? 20 : 14,
          }}
        >
          {banana}
        </button>
      );
    }
    function App() {
      return (
        <div>
          <Btn banana="Save Changes" big={false} />
          <Btn banana="Continue" big={true} />
        </div>
      );
    }

    const root = document.querySelector("#root");
    ReactDOM.render(<App />, root);
  </script>
</html>
```

props를 이용해 하위 컴포넌트로 데이터를 내려 보냄



`React.memo()`

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    // function Btn(props) {
    // 인자는 props 하나
    function Btn({ text, onClick }) {
      console.log(`${text} button rendered`);
      return (
        <button
          onClick={onClick}
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
          }}
        >
          {text}
        </button>
      );
    }
    const MemorizedBtn = React.memo(Btn); // 새로운 버튼만 렌더링
    function App() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");
      return (
        <div>
          <MemorizedBtn text={value} onClick={changeValue} />
          <MemorizedBtn text="Continue" />
        </div>
      );
    }

    const root = document.querySelector("#root");
    ReactDOM.render(<App />, root);
  </script>
</html>
```

부모의 어떤 state라도 변경이 있으면 자식도 전부 다시 렌더링되는데, 변경이 없어서 다시 렌더링될 필요가 없는 자식들을 위해 memo를 사용할 수 있음. 렌더링을 맨날 다시 하면 나중에 크기가 커질 때 렉이 걸릴 수 있다.



`propTypes`

```react
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function Btn({ text, onClick, fontSize }) {
      console.log(`${text} button rendered`);
      return (
        <button
          onClick={onClick}
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize,
          }}
        >
          {text}
        </button>
      );
    }
    const MemorizedBtn = React.memo(Btn); // 새로운 버튼만 렌더링
    // propTypes, PropTypes
    // .isRequired
    // default value도 가능
    Btn.propTypes = {
      text: PropTypes.string,
      fontSize: PropTypes.number,
    };
    function App() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");
      return (
        <div>
          <MemorizedBtn text={value} onClick={changeValue} />
          <MemorizedBtn text="Continue" fontSize="string" />
        </div>
      );
    }

    const root = document.querySelector("#root");
    ReactDOM.render(<App />, root);
  </script>
</html>
```

`<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>`



---



## 5. React App

`npx create-react-app my-app`

`cd my-app`, `code my-app`

`npm run start`, `npm start`

`/src`

`App.js`, `index.js`

```react
// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```react
// App.js

function App() {
  return <div></div>;
}

export default App;
```



props 받기, css 적용

`npm i prop-types`

```react
// Button.js

import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
```



css 적용

```css
/* Button.module.css */

.btn {
  color: white;
  background-color: tomato;
}
```



`useEffect`

```react
// import Button from "./Button";

// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  // useEffect(() => {
  //   console.log("created :)");
  //   return () => console.log("destroyed :(");
  // }, []);
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  // const iRunOnlyOnce = () => console.log("I run only once");
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes", counter);
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword', 'counter' changes", keyword, counter);
  }, [keyword, counter]);
  const onClick2 = () => setShowing((prev) => !prev);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h3>{counter}</h3>
      <button onClick={onClick}>click me</button>
      {/* <h1 className={styles.title}>Welcome back!</h1> */}
      {/* <Button text={"Continue"} /> */}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
```



---



## 6. To Do

```react
// App.js

import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    } else {
      setToDos((currentArray) => {
        const newArray = [toDo, ...currentArray];
        console.log(newArray);
        return newArray;
      }); // Array 수정하는 함수
      setToDo("");
    }
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

`useState()`의 인자는 초깃값

HTML 안에 JS 문법 적용하고 싶으면 `{}` 안에 작성

배열을 변경하고 싶으면 함수를 넣어 함수에서 변경함

그냥 변경하면 뭔가 한 박자 느리게 동작

아래 함수로 작성하면 제대로 동작

```react
setToDos((currentArray) => [toDo, ...currentArray]);
// // // // // // // // // // // // // // // // // //
setToDos((currentArray) => {
    const newArray = [toDo, ...currentArray];
    return newArray;
});
```

고유한 `key` prop이 필요한 경우

`.map((item, idx) => {})`에서 `idx`를 끌어오고, prop으로 `key={idx}`를 넘김



---



## 7. Coins

```react
// App.js

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

`fetch()`

`XMLHttpRequest`와 비슷하고 `axios()`보다 간단

별도로 설치할 필요가 없지만 기능이 간단함

[axios vs fetch](https://kimtongting.tistory.com/entry/React-axios-vs-fetch-axios-fetch-%EC%B0%A8%EC%9D%B4-axios-fetch-%EC%B0%A8%EC%9D%B4%EC%A0%90)



---



## 8. movie

`/src`

`/src/components`

`/src/routes`

```react
// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
```

`npm i react-router-dom`

`<Route />` 태그 안에 `path`, `element`로 지정

동적 URL 지정은 `:id`이런 식으로.. 변수명은 마음대로 지정



```react
// Home.js

import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Movies</h1>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
```

`useEffect()`로 API는 한 번만 가져오기

`map()`으로 `<Movie />` 컴포넌트 반복 작업

`key` 꼭 넣어주기

props로 데이터 전달

async, await 알아두기



```react
// Movie.js

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title} />
      </div>
      <Link to={`/movie/${id}`}>{title}</Link>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```

`<Link></Link>`를 이용해 라우터 링크 사용

`to`로 이동할 곳 지정

`.slice()`로 내용 너무 길면 잘라주기

`PropTypes` 이용해서 props 정의



```react
// Detail.js

import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}

export default Detail;
```

`useParams()`를 이용해 동적 URL 값 받음

Object로 전달됨

