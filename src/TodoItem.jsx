export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <li>
        <label>
          <input
            type="checkbox"
            className="check"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </li>
    </div>
  );
}
