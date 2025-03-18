import { FiLoader } from 'react-icons/fi';
import { Card } from '../components/card/Card';
import { useBookStore } from '../store/bookStore';
import { Book } from '../types';

import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams<{ id?: string }>();
  const { books, isLoading } = useBookStore();

  const getBookId = (bookUrl: string) => {
    const parts = bookUrl.split('/');
    return parts[parts.length - 1];
  };
  const book = books.find((b: Book) => getBookId(b.url) === id);

  if (!book) {
    return <h1>Libro no encontrado</h1>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center h-190 bg-gray-300">
      {isLoading ? (
        <div className=" flex flex-col items-center ">
          <FiLoader
            className="animate-spin"
            size={56}
            color="rgb(255, 100, 103)"
          />
          <span>Se están cargando los detalles del libro...</span>
        </div>
      ) : (
        <Card book={book} />
      )}
    </div>
  );
};

export default Detail;
