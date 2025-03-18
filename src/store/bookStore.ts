import { create } from 'zustand';
import { getData } from '../api/axios';
import { Book, BookStore } from '../types';

export const useBookStore = create<BookStore>((set) => ({
  isLoading: true,
  error: null,
  books: [],

  getBooks: async () => {
    set({ isLoading: true });
    try {
      const response: Book[] = await getData();
      set({ books: response, isLoading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error
            ? error.message
            : 'Hubo un problema al intentar obtener los libros. Intenta de nuevo.',
        isLoading: false,
      });
    }
  },

  setBooks: (books: Book[]) => set({ books }),
}));
useBookStore.getState().getBooks();
