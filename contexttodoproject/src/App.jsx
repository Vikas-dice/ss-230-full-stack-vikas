import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import { Container } from "react-bootstrap";
import { TodoProvider } from "./contexts";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    let newTodoTask = {
      id: Date.now(),
      todo: todo,
      completed: false,
    };
    let newlist = [...todos];
    newlist.push(newTodoTask);
    setTodos(newlist);
  };

  const deleteTodo = (id) => {
    let newarr = todos.filter((todo) => todo.id !== id);
    setTodos(newarr);
  };
  const toggleCompleted = (id) => {
    let newarr = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(newarr);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleCompleted, updateTodo }}
    >
      <Container>
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem particularTodo={todo} key={todo.id} />
        ))}
      </Container>
    </TodoProvider>
  );
}

export default App;
