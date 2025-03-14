import { useState } from 'react';
import BookTable from '../components/BookTable';
import Modal from '../components/Modal';
import { useBooks } from '../context/BookContext';

const Home = () => {
  const context = useBooks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { books } = context;
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" w-full flex flex-col items-center h-full ">
      <h1 className="mt-20 text-5xl font-bold underline">Libros desde Home</h1>

      <BookTable books={books} />
      <button
        className="bg-blue-400 rounded-sm p-3 text text-white font-bold m-6 "
        onClick={handleOpenModal}
      >
        Agregar un libro{' '}
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
