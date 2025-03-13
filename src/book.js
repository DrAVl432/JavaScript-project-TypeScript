// src/book.js
class Book {
    constructor(id, title, author, publishedYear, genre, available) {
      this.id = id || Date.now();
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
      this.genre = genre;
      this.available = available || true;
    }
  }
  
  module.exports = Book;