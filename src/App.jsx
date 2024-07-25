import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleAddTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
    persistData([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
    persistData(todos.filter((_, todoIndex) => todoIndex !== index));
  };

  const handleEditTodo = (index) => {
    setTodoValue(todos[index]);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos).todos);
    }
  }, []);

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
