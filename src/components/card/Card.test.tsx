import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import { Book } from '../../types';
import { Card } from './Card';
import { useFavoritesStore } from '../../store/favoritesStores';

describe('Card component', () => {
  const mockBook: Book = {
    name: 'El coronel no tiene quien le escriba',
    authors: ['Gabriel García Márquez'],
    released: '1961-01-01T10:00:00Z',
    country: 'Colombia',
    numberOfPages: 140,
    publisher: 'Editorial Sudamericana',
    url: 'https://example.com/book2',
  };

  test('debe renderizar la información del libro', () => {
    useFavoritesStore.setState({
      favorites: [],
    });

    render(<Card book={mockBook} />);

    expect(
      screen.getByText('El coronel no tiene quien le escriba')
    ).toBeInTheDocument();
    expect(screen.getByText('Gabriel García Márquez')).toBeInTheDocument();
    expect(
      screen.getByText('Fecha de publicación: 1 de enero de 1961')
    ).toBeInTheDocument();
    expect(screen.getByText('País: Colombia')).toBeInTheDocument();
    expect(screen.getByText('Páginas: 140')).toBeInTheDocument();
    expect(
      screen.getByText('Editorial: Editorial Sudamericana')
    ).toBeInTheDocument();
  });

  test('debe llamar a toggleFavorite al hacer clic en el botón de favoritos', () => {
    const toggleFavoriteMock = jest.fn();
    useFavoritesStore.setState({
      toggleFavorite: toggleFavoriteMock,
      favorites: [],
    });

    render(<Card book={mockBook} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(toggleFavoriteMock).toHaveBeenCalledWith(mockBook);
  });

  test('debe mostrar el icono correcto si el libro está en favoritos', () => {
    useFavoritesStore.setState({
      favorites: [mockBook],
    });

    render(<Card book={mockBook} />);

    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });
});
