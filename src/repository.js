// src/repository.js
const Book = require('./book');

class BooksRepository {
  constructor() {
    this.books = [];
  }

  createBook(book) {
    this.books.push(book);
  }

  getBook(id) {
    return this.books.find((b) => b.id === id) || null;
  }

  getBooks() {
    return this.books;
  }

  updateBook(id, updatedBook) {
    const index = this.books.findIndex((b) => b.id === id);
    if (index !== -1) {
      this.books[index] = { ...this.books[index], ...updatedBook };
    }
  }

  deleteBook(id) {
    this.books = this.books.filter((b) => b.id !== id);
  }
}

module.exports = BooksRepository;