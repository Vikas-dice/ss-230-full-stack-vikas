import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [clickme, setClickMe] = useState(false);
  const [clickme2, setClickMe2] = useState(true);
  console.log("start");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => setList(res));
  }, [clickme]); //ComponentDidMount //ComponentDidUpdate

  return (
    <div>
      {console.log("UI Show")}
      <button onClick={() => setClickMe(!clickme)}>Click Me</button>
      <button onClick={() => setClickMe2(!clickme2)}>Click Me2</button>
      <ul>
        {list.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
