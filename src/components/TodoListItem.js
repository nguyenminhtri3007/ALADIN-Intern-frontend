import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  if (tasks.length === 0) {
    return <p>🎉 Không có công việc nào!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
