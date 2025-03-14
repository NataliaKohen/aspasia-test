export interface Book {
  name: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}

export interface FormValues {
  nombre: string;
  autor: string;
  edicion: string;
  pais: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
