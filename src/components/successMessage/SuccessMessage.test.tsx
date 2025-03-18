import { render, screen } from '@testing-library/react';

import { FormValues } from '../../types';
import { SuccessMessage } from './SuccessMessage';

describe('SuccessMessage component', () => {
  const mockNewBook: FormValues[] = [
    {
      name: 'El Señor de los Anillos',
      authors: ['J.R.R. Tolkien'],
      publisher: 'Editorial Minotauro',
      country: 'Reino Unido',
      released: '2025-03-31T03:00:00.000Z',
      url: '',
      numberOfPages: 100,
      gender: 'Fantasy',
    },
  ];

  test('deberia mostrar la información que fue capturada por el form ', () => {
    render(<SuccessMessage newBook={mockNewBook} />);

    expect(
      screen.getByText('¡Tu libro se ha guardado exitosamente!')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Título:\s*El Señor de los Anillos/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Autor: J.R.R. Tolkien')).toBeInTheDocument();
    expect(
      screen.getByText('Editorial: Editorial Minotauro')
    ).toBeInTheDocument();
    expect(screen.getByText('País: Reino Unido')).toBeInTheDocument();
    expect(
      screen.getByText('Fecha de publicación: 31/3/2025')
    ).toBeInTheDocument();
  });
});
