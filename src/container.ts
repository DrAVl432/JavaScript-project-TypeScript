import { Container } from "inversify";
import "reflect-metadata";
import { BooksRepository } from "./repository";
import { Book } from './book';
class InMemoryBooksRepository extends BooksRepository {
    private books: Book[] = [];

    createBook(book: Book): void {
        this.books.push(book);
    }

    getBook(id: number): Book | null {
        const book = this.books.find(b => b.id === id);
        return book || null;
    }

    getBooks(): Book[] {
        return this.books;
    }

    updateBook(id: number, updatedBook: Book): void {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) this.books[index] = updatedBook;
    }

    deleteBook(id: number): void {
        this.books = this.books.filter(b => b.id !== id);
    }
}

// Создание IoC контейнера
const container = new Container();
container.bind(BooksRepository).to(InMemoryBooksRepository);

export { container };