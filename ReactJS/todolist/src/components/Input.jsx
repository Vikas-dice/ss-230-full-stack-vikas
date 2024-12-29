import { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const Input = (props) => {
  console.log(props.updateItem.value);
  const [input, setInput] = useState("");

  const onClickHandler = () => {
    if (input.length === 0) {
      alert("Please Insert some value");
      return;
    }
    props.btnHandler(input);
    setInput("");
  };

  useEffect(() => {
    setInput(props.updateItem.value);
  }, [props.updateItem.value]);
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
