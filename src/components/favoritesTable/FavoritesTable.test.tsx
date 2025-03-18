import { fireEvent, render, screen } from '@testing-library/react';
import { FavoritesTable } from './FavoritesTable';
import { FavoritesBooks } from '../../types';
import { useFavoritesStore } from '../../store/favoritesStores';

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
}));

const mockFavorites: FavoritesBooks[] = [
  {
    name: 'El coronel no tiene quien le escriba',
    authors: ['Gabriel García Márquez'],
    publisher: 'Sudamericana',
    country: 'Colombia',
    released: '1961-01-01T10:00:00Z',
    url: 'https://example.com/book2',
  },
  {
    name: 'El regreso de los tigres de Mompracem',
    authors: ['Bárbara Wood'],
    released: '1997-09-01T10:00:00Z',
    country: 'Estados Unidos',
    publisher: 'Planeta',
    url: 'https://example.com/book3',
  },
];

test('debe renderizar la tabla con los libros favoritos', () => {
  useFavoritesStore.setState({
    favorites: mockFavorites,
  });

  render(<FavoritesTable favorites={mockFavorites} />);

  expect(
    screen.getByText('El coronel no tiene quien le escriba')
  ).toBeInTheDocument();
  expect(
    screen.getByText('El regreso de los tigres de Mompracem')
  ).toBeInTheDocument();
  expect(screen.getByText('Gabriel García Márquez')).toBeInTheDocument();
  expect(screen.getByText('Bárbara Wood')).toBeInTheDocument();
  expect(screen.getByText('Sudamericana')).toBeInTheDocument();
  expect(screen.getByText('Planeta')).toBeInTheDocument();
  expect(screen.getByText('Colombia')).toBeInTheDocument();
  expect(screen.getByText('Estados Unidos')).toBeInTheDocument();
});

test('debe mostrar el mensaje cuando no hay libros favoritos', () => {
  useFavoritesStore.setState({
    favorites: [],
  });

  render(<FavoritesTable favorites={[]} />);

  expect(
    screen.getByText('Aún no tienes libros favoritos')
  ).toBeInTheDocument();
});

test('debe ordenar los libros por nombre cuando se hace clic en el encabezado', () => {
  render(<FavoritesTable favorites={mockFavorites} />);

  const nameHeader = screen.getByText('Nombre');
  fireEvent.click(nameHeader);

  expect(
    screen.getByText('El coronel no tiene quien le escriba')
  ).toBeInTheDocument();
  expect(
    screen.getByText('El regreso de los tigres de Mompracem')
  ).toBeInTheDocument();
});
