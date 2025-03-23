import { Book } from './book';

export class BookList {
  list: Book[] = [];

  addBook(book: Book) {
    this.list.push(book);
  }

  countBooksByYear(): { [year: string]: number } {
    return this.list.reduce((acc, book) => {
      acc[book.year] = (acc[book.year] || 0) + 1;
      return acc;
    }, {} as { [year: string]: number });
  }

  groupByGenre(): { [genre: string]: number } {
    return this.list.reduce((acc, book) => {
      acc[book.genre] = (acc[book.genre] || 0) + 1;
      return acc;
    }, {} as { [genre: string]: number });
  }
}
