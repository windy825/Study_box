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
