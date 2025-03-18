import { render, screen } from '@testing-library/react';
import { FavoritesTable } from './FavoritesTable';
// import { FavoritesBooks } from '../../types';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// const mockFavorites: FavoritesBooks[] = [
//   {
//     url: 'https://anapioficeandfire.com/api/books/1',
//     name: 'A Game of Thrones',
//     authors: ['George R. R. Martin'],
//     publisher: 'Bantam Books',
//     country: 'United States',
//     released: '1996-08-06T00:00:00',
//   },
//   {
//     url: 'https://anapioficeandfire.com/api/books/2',
//     name: 'A Clash of Kings',
//     authors: ['George R. R. Martin'],
//     publisher: 'Bantam Books',
//     country: 'United States',
//     released: '1998-11-16T00:00:00',
//   },
// ];

describe('FavoritesTable component', () => {
  //   test('renderiza la tabla con libros favoritos', () => {
  //     console.log(FavoritesTable);
  //     render(<FavoritesTable favorites={mockFavorites} />);

  //     expect(screen.getByText('A Game of Thrones')).toBeInTheDocument();
  //     expect(screen.getByText('A Clash of Kings')).toBeInTheDocument();
  //     expect(screen.getByText('George R. R. Martin')).toBeInTheDocument();
  //     expect(screen.getByText('Bantam Books')).toBeInTheDocument();
  //     expect(screen.getByText('Estados Unidos')).toBeInTheDocument();
  //   });
  test('muestra mensaje si no hay favoritos', () => {
    render(<FavoritesTable favorites={[]} />);
    expect(
      screen.getByText('Aún no tienes libros favoritos')
    ).toBeInTheDocument();
  });
});
