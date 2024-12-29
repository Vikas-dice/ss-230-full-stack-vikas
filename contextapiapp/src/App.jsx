import React, { useState } from "react";
import Theme from "./context/context";
import A from "./components/A";
import Auth from "./context/authcontext";
const App = () => {
  const [name, setName] = useState("kruzz");
  return (
    <Auth.Provider value={"Seenu"}>
      <A />
      <B/>
      <C/>
    </Auth.Provider>
  );
};

export default App;
