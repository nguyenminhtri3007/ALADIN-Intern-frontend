import React, { useState } from "react";
import { Book } from "../common/model/Book";
import { User } from "../common/model/User";
import { LibraryService } from "../common/service/library.service";
import UserInfo from "../components/UserInfo";
import BookList from "../components/BookList";
import AddBookForm from "../components/AddBookForm";

const library = new LibraryService();
const user = new User("Minh Trí");
library.addUser(user);

let nextId = 1;

const LibraryScreen = () => {
  const [books, setBooks] = useState([]);
  const [currentUser] = useState(user);

  const handleAddBook = (title, author) => {
    const newBook = new Book(nextId++, title, author);
    library.addBook(newBook);
    setBooks([...library.getBooks()]);
  };

  const handleBorrow = (book) => {
    currentUser.borrowBook(book);
    setBooks([...library.getBooks()]);
  };

  const handleReturn = (bookId) => {
    currentUser.returnBook(bookId);
    setBooks([...library.getBooks()]);
  };

  return (
    <div style={{ marginLeft: "30px" }}>
      <h2> Thư viện</h2>
      <AddBookForm onAdd={handleAddBook} />
      <BookList books={books} onBorrow={handleBorrow} />
      <UserInfo user={currentUser} onReturn={handleReturn} />
    </div>
  );
};

export default LibraryScreen;
