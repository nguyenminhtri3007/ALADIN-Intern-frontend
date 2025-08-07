import React, { useState } from "react";
import TodoListInput from "../components/TodoListInput";
import TodoList from "../components/TodoListItem";

const TodoListScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };
  const toggleTask = (id) => {
    const updateTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };
  return (
    <div style={{ padding: "30px" }}>
      <h3>Danh sách các công việt</h3>
      <TodoListInput addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default TodoListScreen;
