import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Book } from '../types';
import { getData } from '../api/axios';

interface BookContextType {
  books: Book[];
  getBooks: () => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const getBooks = async () => {
    const response: Book[] = await getData();
    setBooks(response);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, getBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = (): BookContextType | undefined => {
  const context = useContext(BookContext);
  return context;
};
