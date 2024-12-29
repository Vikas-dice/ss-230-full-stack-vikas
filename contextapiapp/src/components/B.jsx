import React, { useContext } from "react";
import Theme from "../context/context";
import Auth from "../context/authcontext";

const B = ({ children }) => {
  const test = useContext(Auth);
  console.log("Test", test);
  return (
    <div>
      <h1>{test}</h1>
      <div>{children}</div>
      <button onClick={() => test.setName("rishabh")}>Click Me</button>
    </div>
  );
};

export default B;
