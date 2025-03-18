import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Formik, Form as FormikForm, Field } from 'formik';
import { Button } from '../button/Button';
import 'react-datepicker/dist/react-datepicker.css';
import { SuccessMessage } from '../successMessage';
import { useBookStore } from '../../store/bookStore';
import { Book, FormValues } from '../../types';

export const Form = () => {
  const [newBook, setNewBook] = useState<FormValues[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { books, setBooks } = useBookStore();

  const capitalizeFirstLetter = (str: string) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <div className="flex flex-col ">
      <h5 className=" text-sm text-sky-600 mb-4">
        Ingrese la información del libro que desea agregar
      </h5>
      <Formik
        initialValues={{
          url: '',
          name: '',
          authors: [] as string[],
          publisher: '',
          country: '',
          gender: '',
          released: null,
          numberOfPages: 100,
        }}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.name) errors.name = 'El nombre es obligatorio';
          if (!values.authors.length)
            errors.authors = 'El autor es obligatorio';
          if (!values.publisher) errors.publisher = 'La edición es obligatoria';
          if (!values.country) errors.country = 'El país es obligatorio';
          if (!values.gender) errors.gender = 'El género es obligatorio';
          if (!values.released)
            errors.released = 'La fecha de publicación es obligatoria';
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setIsLoading(true);
          const formattedValues = {
            ...values,
            name: capitalizeFirstLetter(values.name),
            authors: values.authors.map((author) =>
              capitalizeFirstLetter(author)
            ),
            publisher: capitalizeFirstLetter(values.publisher),
            country: capitalizeFirstLetter(values.country),
            gender: capitalizeFirstLetter(values.gender),
          };
          setNewBook((prevBooks) => [...prevBooks, formattedValues]);

          const newBookToStore: Book = {
            ...formattedValues,
            url: 'https://anapioficeandfire.com/api/books/1',
            authors: formattedValues.authors as string[],
          };
          setBooks([...books, newBookToStore]);
          setIsSubmitted(true);
          resetForm();
          setIsLoading(false);
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <FormikForm className="flex flex-col items-end p-6 border rounded-lg border-blue-300 bg-white shadow-md">
            <div className=" flex m-4 ">
              <div className="mx-4">
                <label
                  htmlFor="name"
                  className="block text-sm text-blue-900 font-semibold"
                >
                  Nombre:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 mt-1 border rounded-md text-blue-400 w-full focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mx-4">
                <label
                  htmlFor="authors"
                  className="block text-sm text-blue-900 font-semibold"
                >
                  Autor:
                </label>
                <Field
                  type="text"
                  id="authors"
                  name="authors"
                  value={values.authors.join(',  ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue(
                      'authors',
                      e.target.value.split(',').map((a) => a.trim())
                    )
                  }
                  className="p-2 mt-1 border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none text-blue-400 w-full "
                />
                {errors.authors && touched.authors && (
                  <p className="text-red-500 text-xs mt-1">{errors.authors}</p>
                )}
              </div>

              <div className="mx-4">
                <label
                  htmlFor="publisher"
                  className="block text-sm text-blue-900 font-semibold"
                >
                  Edición:
                </label>
                <Field
                  type="text"
                  id="publisher"
                  name="publisher"
                  className="p-2 mt-1 border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none text-blue-400 w-full "
                />
                {errors.publisher && touched.publisher && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.publisher}
                  </p>
                )}
              </div>
              <div className="mx-4">
                <label
                  htmlFor="gender"
                  className="block text-sm text-blue-900 font-semibold"
                >
                  Género:
                </label>
                <Field
                  type="text"
                  id="gender"
                  name="gender"
                  className="p-2 mt-1 border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none text-blue-400 w-full "
                />
                {errors.gender && touched.gender && (
                  <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                )}
              </div>
              <div className="mx-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-blue-900"
                >
                  País:
                </label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  className="p-2 mt-1 border rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none text-blue-400 w-full "
                />
                {errors.country && touched.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>
              <div className="mx-4">
                <label
                  className="block text-sm font-semibold text-blue-900 "
                  id="publication-date-label"
                  htmlFor="publication-date"
                >
                  Fecha de publicación:
                </label>
                <DatePicker
                  selected={values.released ? new Date(values.released) : null}
                  onChange={(date) => setFieldValue('released', date)}
                  placeholderText="Selecciona una fecha"
                  id="publication-date"
                  aria-labelledby="publication-date-label"
                  className="p-2 mt-1 border rounded-md text-blue-400 w-full focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none placeholder:text-blue-400 cursor-pointer"
                />
                {errors.released && touched.released && (
                  <p className="text-red-500 text-xs mt-1">{errors.released}</p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className=" px-6 mt-4 rounded-md  transition "
            >
              {isLoading ? 'Guardando...' : 'Guardar'}
            </Button>
          </FormikForm>
        )}
      </Formik>
      {isSubmitted && <SuccessMessage newBook={newBook} />}
    </div>
  );
};
