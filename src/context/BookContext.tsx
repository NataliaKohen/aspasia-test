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

  const getCharacterName = async (url: string): Promise<string> => {
    const response = await fetch(url);
    const data = await response.json();
    return data.name;
  };

  const getBooks = async () => {
    const response: Book[] = await getData();

    const booksWithCharacters = await Promise.all(
      response.map(async (book) => ({
        ...book,
        povCharacters: await Promise.all(
          book.povCharacters.map(getCharacterName)
        ),
      }))
    );

    setBooks(booksWithCharacters);
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
