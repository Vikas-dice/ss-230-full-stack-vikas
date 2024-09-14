import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  console.log(count);
  const onClickHandler = () => {
    setCount((count) => count + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>My name is {count}</h1>
      <button onClick={onClickHandler}>Hit Me</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
