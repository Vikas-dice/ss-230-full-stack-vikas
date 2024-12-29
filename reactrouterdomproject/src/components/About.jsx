import React from "react";
import { useNavigate, Link } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4];
  return (
    <>
      <div>About</div>
      <button onClick={() => navigate("/contact/45")}>Click Me</button>
      {arr.map((item) => (
        <div key={item}>
          <Link to={"/contact/" + JSON.stringify(item)}>{item}</Link>
        </div>
      ))}
    </>
  );
};

export default About;
