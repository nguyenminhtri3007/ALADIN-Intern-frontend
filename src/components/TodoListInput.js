import { useState } from "react";

const TodoListInput = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" style={{ marginLeft: "30px" }}>
        Thêm mới
      </button>
    </form>
  );
};

export default TodoListInput;
