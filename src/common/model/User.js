export class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.isAvailable) {
      book.borrow();
      this.borrowedBooks.push(book);
    }
  }

  returnBook(bookId) {
    const bookToReturn = this.borrowedBooks.find((book) => book.id === bookId);
    if (bookToReturn) {
      bookToReturn.returnBook();
      this.borrowedBooks = this.borrowedBooks.filter(
        (book) => book.id !== bookId
      );
    }
  }
}
