import { useState, useEffect } from 'react';

import { useBooks } from '../context/BookContext';

import { BookTable } from '../components/bookTable/BookTable';
import { Modal } from '../components/modal/Modal';
import { Button } from '../components/button/Button';

const Home = () => {
  const context = useBooks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { books, getBooks } = context;

  useEffect(() => {
    getBooks();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" w-full flex flex-col items-center  h-full ">
      <h1 className="mt-20 md:text-4xl text-cyan-700  underline">
        Libros disponibles
      </h1>
      <div className="flex flex-col items-end xs: px-4 sm:px-10 md:px-20">
        <BookTable books={books} />
        <Button
          className=" bg-cyan-500 text  hover:bg-cyan-600  text-white font-bold my-10 w-sm "
          onClick={handleOpenModal}
        >
          {' '}
          Agregar un libro
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
