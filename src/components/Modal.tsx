import { ModalProps } from '../types';
import Form from './Form';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <div className=" flex  flex-col items-center bg-white p-5 rounded ">
        <h1 className=" font-semibold text-blue-800 mb-4">Agregar un libro</h1>
        <Form />
        <button
          className=" bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
