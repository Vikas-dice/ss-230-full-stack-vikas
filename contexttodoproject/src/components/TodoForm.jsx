import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useTodo } from "../contexts";
const TodoForm = () => {
  const [inputVal, setInputVal] = useState("");
  const { addTodo } = useTodo();

  const addHandler = (e) => {
    e.preventDefault();
    console.log(inputVal);
    addTodo(inputVal);
    setInputVal("");
  };

  return (
    <>
      <h3>Add Todo</h3>

      <form onSubmit={addHandler}>
        <InputGroup className="mt-3">
          <Form.Control
            placeholder="Enter a Todo"
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
          />
        </InputGroup>
        <Button variant="primary" type="submit" className="mt-3">
          Add
        </Button>
      </form>
    </>
  );
};

export default TodoForm;
