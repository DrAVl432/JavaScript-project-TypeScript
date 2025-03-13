import express from "express";
import bodyParser from "body-parser";
import { container } from "./container";
import { BooksRepository } from "./repository";

const app = express();

app.use(bodyParser.json());

app.get("/books", async (req, res) => {
    const repo = container.get<BooksRepository>(BooksRepository);
    const books = repo.getBooks();
    res.json(books);
});

app.get("/books/:id", async (req, res) => {
    const repo = container.get<BooksRepository>(BooksRepository);
    const book = repo.getBook(Number(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

app.post("/books", async (req, res) => {
    const repo = container.get<BooksRepository>(BooksRepository);
    repo.createBook(req.body);
    res.status(201).send("Book created");
});

app.put("/books/:id", async (req, res) => {
    const repo = container.get<BooksRepository>(BooksRepository);
    repo.updateBook(Number(req.params.id), req.body);
    res.send("Book updated");
});

app.delete("/books/:id", async (req, res) => {
    const repo = container.get<BooksRepository>(BooksRepository);
    repo.deleteBook(Number(req.params.id));
    res.send("Book deleted");
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});