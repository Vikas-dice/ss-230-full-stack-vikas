import { useEffect, useState } from "react";
import Hero from "./components/Hero";

const App = () => {
  const [val, setName] = useState([]);
  console.log("Name");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => setName(res));
  }, []);

  return (
    <div>
      {console.log("UI")}
      {val.length === 0 ? (
        <h1>loading....</h1>
      ) : (
        val.map((item) => <h2>{item.title}</h2>)
      )}
      <button onClick={() => setName([])}>Click Me</button>
    </div>
  );
};

export default App;
