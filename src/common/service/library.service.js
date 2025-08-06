export class LibraryService {
  constructor() {
    this.books = [];
    this.users = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }

  addUser(user) {
    this.users.push(user);
  }

  getUser(name) {
    return this.users.find((user) => user.name === name);
  }
}
