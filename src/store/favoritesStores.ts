import { create } from 'zustand';
import { FavoritesBooks, FavoritesState } from '../types';

export const useFavoritesStore = create<FavoritesState>((set) => ({
  isLoading: false,
  favorites: [],

  addFavorite: (book: FavoritesBooks) => {
    set({ isLoading: true });
    set((state) => {
      if (!state.favorites.some((fav) => fav.url === book.url)) {
        return { favorites: [...state.favorites, book] };
      }
      return state;
    });
    set({ isLoading: false });
  },

  removeFavorite: (url: string) => {
    set({ isLoading: true });
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.url !== url),
    }));
    set({ isLoading: false });
  },

  toggleFavorite: (book: FavoritesBooks) => {
    set({ isLoading: true });
    set((state) => {
      if (state.favorites.some((fav) => fav.url === book.url)) {
        return {
          favorites: state.favorites.filter((fav) => fav.url !== book.url),
        };
      }
      return { favorites: [...state.favorites, book] };
    });
    set({ isLoading: false });
  },

  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
