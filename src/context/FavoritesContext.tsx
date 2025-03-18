import { createContext, useContext, useState, ReactNode } from 'react';
import { FavoritesBooks, FavoritesContextType } from '../types';

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de un FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoritesBooks[]>([]);

  const addFavorite = (book: FavoritesBooks) => {
    setFavorites((prev) => {
      if (!prev.some((fav) => fav.url === book.url)) {
        return [...prev, book];
      }
      return prev;
    });
  };

  const removeFavorite = (url: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.url !== url));
    console.log('Elimine un fav');
  };

  const toggleFavorite = (book: FavoritesBooks) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.url === book.url)) {
        return prev.filter((fav) => fav.url !== book.url);
      }
      return [...prev, book];
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
