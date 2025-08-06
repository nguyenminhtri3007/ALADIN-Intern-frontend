import React from "react";

const BookList = ({ books, onBorrow }) => {
  return (
    <div>
      <h3>Danh sách sách</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author} -{" "}
            {book.isAvailable && (
              <button onClick={() => onBorrow(book)}>Mượn</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
