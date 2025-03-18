import { FormValues } from '../../types';

interface SuccessMessageProps {
  newBook: FormValues[];
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ newBook }) => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-blue-900">
        ¡Tu libro se ha guardado exitosamente!
      </h4>

      {newBook.map((newBook, index) => (
        <div key={index} className=" flex flex-col text-sm text-gray-700 m-6">
          <strong>Título:{newBook.name}</strong>
          <h4>Autor: {newBook.authors?.join(', ')}</h4>
          <h4>Editorial: {newBook.publisher}</h4>
          <h4>Género: {newBook.gender}</h4>
          <h4>País: {newBook.country}</h4>
          <h4>
            Fecha de publicación:{' '}
            {newBook.released
              ? new Date(newBook.released).toLocaleDateString('es-ES')
              : 'No disponible'}
          </h4>
        </div>
      ))}
    </div>
  );
};
