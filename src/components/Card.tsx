import { Book } from '../types';

const Card = ({ book }: { book: Book }) => {
  return (
    <div className=" flex flex-col items-center bg-blue-500  w-full m-2">
      <h1>{book?.name}</h1>
      <h2>{book?.authors}</h2>
      <h3>{book?.released}</h3>
    </div>
  );
};

export default Card;
