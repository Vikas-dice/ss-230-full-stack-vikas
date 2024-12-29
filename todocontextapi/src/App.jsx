import React from "react";
import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
