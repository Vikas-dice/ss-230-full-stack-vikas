import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const Input = (props) => {
  const [input, setInput] = useState("Coffee");
  console.log(props);

  const onClickHandler = () => {
    if (input.length === 0) {
      alert("Please Insert some value");
      return;
    }
    props.btnHandler(input);
    setInput("");
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Your Task"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button variant="primary" onClick={onClickHandler}>
          Submit
        </Button>
      </InputGroup>
    </>
  );
};

export default Input;
