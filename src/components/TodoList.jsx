import PropTypes from "prop-types";
import TodoCard from "./TodoCard";

function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          index={index}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
};

export default TodoList;
