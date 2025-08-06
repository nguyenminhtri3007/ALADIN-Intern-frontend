export class Book {
  constructor(id, title, author) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.isAvailable = true;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }
}
