import { FormValues } from '../types';

interface SuccessMessageProps {
  book: FormValues[];
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ book }) => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-blue-900">
        ¡Tu libro se ha guardado exitosamente!
      </h4>
      <ul className="list-disc p-6">
        {book.map((book, index) => (
          <li key={index} className="text-sm text-gray-700">
            <strong>{book.nombre}</strong> {book.autor} ({book.edicion},{' '}
            {book.pais})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessMessage;
