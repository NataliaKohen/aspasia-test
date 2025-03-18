import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  test('ejecuta la función onClick cuando se hace clic', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('deberia aplicar las clases adicionales correctamente', () => {
    render(<Button className="bg-red-500">Click me</Button>);

    const button = screen.getByText('Click me');
    expect(button).toHaveClass('bg-red-500');
  });
});
