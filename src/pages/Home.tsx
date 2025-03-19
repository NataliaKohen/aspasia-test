import { useState } from 'react';
import { BookTable } from '../components/bookTable/BookTable';
import { Modal } from '../components/modal/Modal';
import { useBookStore } from '../store/bookStore';
import { Button } from '../components/button/Button';
import { FiLoader } from 'react-icons/fi';

const Home = () => {
  const { books, isLoading } = useBookStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="w-full flex flex-col items-center border  p-90">
          <FiLoader
            className="animate-spin"
            size={48}
            color="rgb(255, 100, 103)"
          />
          <span className=" mt-4">
            Los libros se están cargando en la tabla
          </span>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center ">
          <h1 className="mt-5 sm:mt-10 md:mt-16 lg:mt-20 md:text-4xl text-cyan-700 underline">
            Libros disponibles
          </h1>
          <div className="flex flex-col items-end sm:px-4 md:px-10 lg:px-20">
            <BookTable books={books} />
            <Button
              className="bg-cyan-500 text hover:bg-cyan-600 text-white font-bold my-10 w-sm"
              onClick={handleOpenModal}
            >
              Agregar un libro
            </Button>
          </div>

          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};
export default Home;
