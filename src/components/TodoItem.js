const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li style={{ margin: "8px 0" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginLeft: "8px",
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        style={{ marginLeft: "12px", color: "red" }}
      >
        Xoá
      </button>
    </li>
  );
};

export default TodoItem;
