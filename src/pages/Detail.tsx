import Card from '../components/Card';
import { Book } from '../types';
import { useBooks } from '../context/BookContext';

const Detail = () => {
  const context = useBooks();
  if (!context) {
    return <div>Loading...</div>;
  }
  const { books } = context;
  console.log(books);
  return (
    <div className=" w-full flex flex-col items-center h-full ">
      {books.map((book: Book) => (
        <Card key={book?.name} book={book} />
      ))}
    </div>
  );
};

export default Detail;
