import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal component', () => {
  const mockOnClose = jest.fn();

  test('debería mostrar el modal cuando isOpen es verdadero', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);

    expect(screen.getByText('Agregar un libro')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cerrar/i })).toBeInTheDocument();
  });

  test('no debería renderizarse cuando isOpen es falso', () => {
    render(<Modal isOpen={false} onClose={mockOnClose} />);

    expect(screen.queryByText('Agregar un libro')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /cerrar/i })
    ).not.toBeInTheDocument();
  });
});
