import { render, screen, fireEvent } from '@testing-library/react';
import { useFavorites } from '../../context/FavoritesContext';
import { jest } from '@jest/globals';
import { Book } from '../../types';
import { Card } from './Card';

jest.mock('../../context/FavoritesContext.tsx', () => ({
  useFavorites: jest.fn(),
}));

describe('Card component', () => {
  const mockBook: Book = {
    name: 'Game of Thrones',
    authors: ['George R.R. Martin'],
    released: '1996-08-01T10:00:00Z',
    country: 'USA',
    numberOfPages: 694,
    publisher: 'Bantam Books',
    url: 'https://example.com/book1',
  };

  test('debe renderizar la información del libro', () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
      toggleFavorite: jest.fn(),
    });

    render(<Card book={mockBook} />);

    expect(screen.getByText('Game of Thrones')).toBeInTheDocument();
    expect(screen.getByText('George R.R. Martin')).toBeInTheDocument();
    expect(
      screen.getByText('Fecha de publicación: 1 de agosto de 1996')
    ).toBeInTheDocument();
    expect(screen.getByText('País: USA')).toBeInTheDocument();
    expect(screen.getByText('Páginas: 694')).toBeInTheDocument();
    expect(screen.getByText('Editorial: Bantam Books')).toBeInTheDocument();
  });

  test('debe llamar a toggleFavorite al hacer clic en el botón de favoritos', () => {
    const toggleFavoriteMock = jest.fn();
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
      toggleFavorite: toggleFavoriteMock,
    });

    render(<Card book={mockBook} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(toggleFavoriteMock).toHaveBeenCalledWith(mockBook);
  });

  test('debe mostrar el icono correcto si el libro está en favoritos', () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [mockBook],
      toggleFavorite: jest.fn(),
    });

    render(<Card book={mockBook} />);

    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });
});
