import PropTypes from "prop-types";

function TodoCard({ children, handleDeleteTodo, handleEditTodo, index }) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

TodoCard.propTypes = {
  children: PropTypes.node.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoCard;
