import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';

jest.mock('../../store/bookStore', () => ({
  useBookStore: () => ({
    books: [],
    setBooks: jest.fn(),
  }),
}));

describe('Form component', () => {
  test('debería mostrar errores de validación cuando los campos pierden el foco ', async () => {
    render(<Form />);

    fireEvent.blur(screen.getByLabelText(/Nombre/i));
    fireEvent.blur(screen.getByLabelText(/Autor/i));
    fireEvent.blur(screen.getByLabelText(/Edición/i));
    fireEvent.blur(screen.getByLabelText(/Género/i));
    fireEvent.blur(screen.getByLabelText(/País/i));

    expect(
      await screen.findByText('El nombre es obligatorio')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('El autor es obligatorio')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('La edición es obligatoria')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('El género es obligatorio')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('El país es obligatorio')
    ).toBeInTheDocument();
  });
});
