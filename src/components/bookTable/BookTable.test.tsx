import { fireEvent, render, screen } from '@testing-library/react';
import { BookTable } from './BookTable';
import { Book } from '../../types';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
const mockBooks: Book[] = [
  {
    url: 'https://anapioficeandfire.com/api/books/1',
    name: 'A Game of Thrones',
    authors: ['George R. R. Martin'],
    numberOfPages: 694,
    publisher: 'Bantam Books',
    country: 'United States',
    released: '1996-08-01T10:00:00',
  },
  {
    name: 'A Clash of Kings',
    authors: ['George R.R. Martin'],
    publisher: 'Bantam Books',
    country: 'USA',
    released: '1996-08-01T10:00:00',
    numberOfPages: 768,
    url: 'https://anapioficeandfire.com/api/books/2',
  },
];

test('renderiza correctamente los datos del libro en la tabla', () => {
  render(<BookTable books={mockBooks} />);

  expect(screen.getByText('A Game of Thrones')).toBeInTheDocument();
  expect(screen.getByText('A Clash of Kings')).toBeInTheDocument();

  expect(screen.getByText('George R.R. Martin')).toBeInTheDocument();
});

test('filtra los libros por nombre con el filtro global', () => {
  render(<BookTable books={mockBooks} />);

  const searchInput = screen.getByPlaceholderText('Buscar...');

  fireEvent.change(searchInput, { target: { value: 'A Game of Thrones' } });

  expect(screen.getByText('A Game of Thrones')).toBeInTheDocument();

  expect(screen.queryByText('A Clash of Kings')).toBeNull();
});
