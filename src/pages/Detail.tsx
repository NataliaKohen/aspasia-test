import { Card } from '../components/card/Card';
import { Book } from '../types';
import { useBooks } from '../context/BookContext';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams<{ id?: string }>();
  const { books } = useBooks();

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
      <Card book={book} />
    </div>
  );
};

export default Detail;
