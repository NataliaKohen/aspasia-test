import { ReactNode } from 'react';

export interface Book {
  url: string;
  name: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  released?: string | null;
  gender?: string | null;
}

export interface FormValues {
  url: string;
  name: string;
  authors: string[];
  publisher: string;
  country: string;
  released?: string | null;
  numberOfPages: number;
  gender?: string | null;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type FavoritesContextType = {
  favorites: Book[];
  addFavorite: (book: Book) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (book: Book) => void;
};

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};
export interface FavoritesTableProps {
  favorites: FavoritesBooks[];
}
export interface FavoritesBooks {
  url: string;
  name: string;
  authors: string[];
  publisher: string;
  country: string;
  released?: string | null;
}
