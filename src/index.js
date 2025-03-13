// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const container = require('./container');

const app = express();
const booksRepository = container.get('BooksRepository');

app.use(bodyParser.json());

// Эндпоинты
app.get('/books', (req, res) => {
  const books = booksRepository.getBooks();
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const book = booksRepository.getBook(Number(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

app.post('/books', (req, res) => {
  const bookData = req.body;
  booksRepository.createBook(bookData);
  res.status(201).send('Book created');
});

app.put('/books/:id', (req, res) => {
  const updatedData = req.body;
  booksRepository.updateBook(Number(req.params.id), updatedData);
  res.send('Book updated');
});

app.delete('/books/:id', (req, res) => {
  booksRepository.deleteBook(Number(req.params.id));
  res.send('Book deleted');
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});