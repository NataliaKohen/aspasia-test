import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Form } from './Form';
import { useBooks } from '../../context/BookContext';

jest.mock('../../context/BookContext', () => ({
  useBooks: jest.fn(),
}));

describe('Form component', () => {
  const setBooksMock = jest.fn();
  const mockUseBooks = useBooks as jest.Mock;

  beforeEach(() => {
    mockUseBooks.mockReturnValue({
      books: [],
      setBooks: setBooksMock,
    });
  });

  test('deberia mostrar errores de validación cuando los campos estan vacíos', async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/nombre/i);
    const authorInput = screen.getByLabelText(/autor/i);
    const publisherInput = screen.getByLabelText(/edición/i);
    const countryInput = screen.getByLabelText(/país/i);
    const genderInput = screen.getByLabelText(/género/i);

    fireEvent.blur(nameInput);
    fireEvent.blur(authorInput);
    fireEvent.blur(publisherInput);
    fireEvent.blur(countryInput);
    fireEvent.blur(genderInput);

    await waitFor(() => {
      expect(screen.getByText(/el nombre es obligatorio/i)).toBeInTheDocument();
      expect(screen.getByText(/el autor es obligatorio/i)).toBeInTheDocument();
      expect(
        screen.getByText(/la edición es obligatoria/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/el país es obligatorio/i)).toBeInTheDocument();
      expect(screen.getByText(/el género es obligatorio/i)).toBeInTheDocument();
    });
  });
});
