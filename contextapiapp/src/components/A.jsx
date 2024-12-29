import React, { useContext } from "react";
import B from "./B";

const A = () => {
  return (
    <div>
      <h1>Component A</h1>
      <B>
        <h3>kkk</h3>
        <h4>kuuu</h4>
        {[1, 2, 3]}
      </B>
    </div>
  );
};

export default A;
