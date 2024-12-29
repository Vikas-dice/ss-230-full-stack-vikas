import { InputGroup, Form, Button } from "react-bootstrap";
import { useTodo } from "../contexts";
import { useState } from "react";
const TodoItem = ({ particularTodo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(particularTodo.todo);
  const { deleteTodo, updateTodo } = useTodo();
  const editTodo = () => {
    updateTodo(particularTodo.id, { ...particularTodo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  return (
    <div>
      <InputGroup className="mt-3">
        <InputGroup.Checkbox value={particularTodo.completed} />
        <input
          type="text"
          value={todoMsg}
          style={{
            border: isTodoEditable ? "0px" : "10px",
          }}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />

        <Button
          variant="primary"
          onClick={() => {
            if (particularTodo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteTodo(particularTodo.id)}>
          Delete
        </Button>
      </InputGroup>
    </div>
  );
};

export default TodoItem;
