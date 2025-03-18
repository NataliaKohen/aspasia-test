import { createContext, useContext, useState, ReactNode } from 'react';
import { Book } from '../types';
import { getData } from '../api/axios';

interface BookContextType {
  books: Book[];
  getBooks: () => void;
  setBooks: (v: Book[]) => void;
}

const BookContext = createContext<BookContextType>({
  books: [],
  getBooks: () => {},
  setBooks: () => {},
});

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const getBooks = async () => {
    const response: Book[] = await getData();
    setBooks(response);
  };

  return (
    <BookContext.Provider value={{ books, getBooks, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = (): BookContextType => {
  const context = useContext(BookContext);
  return context;
};
