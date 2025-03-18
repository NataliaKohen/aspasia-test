import React from 'react';
import { ModalProps } from '../../types';
import { Form } from '../form/Form';
import { Button } from '../button/Button';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <div className=" flex  flex-col items-center bg-white p-5 rounded ">
        <div className=" flex  w-full justify-between mx-30 bg-white ">
          <h1 className=" font-semibold text-xl text-blue-900 mb-4">
            Agregar un libro
          </h1>
          <Button
            className=" bg-slate-400 text-white px-6 mt-4 rounded-md hover:bg-cyan-600  "
            onClick={onClose}
          >
            Cerrar
          </Button>
        </div>
        <Form />
      </div>
    </div>
  );
};
