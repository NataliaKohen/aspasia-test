import { useBooks } from '../context/BookContext';
import Card from '../components/Card';
import { Book } from '../types';
// import Table from '../components/Table';
import Tableb from '../components/Tableb';

const Home = () => {
  const context = useBooks();

  if (!context) {
    return <div>Loading...</div>;
  }

  const { books } = context;
  // const [books, setBooks] = useState<Book[]>([]);

  // useEffect(() => {
  //   const getBooks = async () => {
  //     const response: Book[] = await getData();
  //     setBooks(response);
  //   };
  //   getBooks();
  // }, []);

  return (
    <div className=" w-full flex flex-col items-center">
      <h1 className=" text-5xl font-bold underline">Libros desde Home</h1>
      {/* <div>
        {books.map((book: Book) => (
          <Card key={book?.name} book={book} />
        ))}
      </div> */}
      {/* <Table /> */} {/*Tabla con los personajes */}
      <Tableb books={books} />
    </div>
  );
};

export default Home;
