import React, { useState } from "react";

const AddBookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && author) {
      onAdd(title, author);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tên sách"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={{ marginLeft: "30px", marginRight: "20px" }}
        placeholder="Tác giả"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Thêm sách</button>
    </form>
  );
};

export default AddBookForm;
