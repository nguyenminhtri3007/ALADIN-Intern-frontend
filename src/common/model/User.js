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
    this.borrowedBooks = this.borrowedBooks.filter((book) => {
      if (book.id === bookId) {
        this.returnBook();
        return false;
      }
      return true;
    });
  }
}
