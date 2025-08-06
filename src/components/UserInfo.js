import React from "react";

const UserInfo = ({ user, onReturn }) => {
  return (
    <div>
      <h3>Người dùng: {user.name}</h3>
      <h4>Sách đã mượn:</h4>
      <ul>
        {user.borrowedBooks.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button onClick={() => onReturn(book.id)}>Trả</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
