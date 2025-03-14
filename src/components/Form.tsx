import { Formik, Form as FormikForm, Field } from 'formik';
import { useState } from 'react';
import SuccessMessage from './SuccessMessage';
import { FormValues } from '../types';

const Form = () => {
  const [books, setBooks] = useState<FormValues[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center ">
      <Formik
        initialValues={{ nombre: '', autor: '', edicion: '', pais: '' }}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.nombre) errors.nombre = 'El nombre es obligatorio';
          if (!values.autor) errors.autor = 'El autor es obligatorio';
          if (!values.edicion) errors.edicion = 'La edición es obligatoria';
          if (!values.pais) errors.pais = 'El país es obligatorio';
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log('Formulario enviado:', values);
          setBooks((prevBooks) => [...prevBooks, values]);
          setIsSubmitted(true);
          resetForm();
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <FormikForm className="flex flex-col items-center m-10 p-6 border rounded-lg border-blue-300 bg-white shadow-md">
            <div className=" flex  m-4 ">
              <div className="mx-4">
                <label
                  htmlFor="nombre"
                  className="block text-sm text-blue-900 font-semibold"
                >
                  Nombre:
                </label>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="p-2 mt-1 border rounded-md text-blue-700 w-full "
                />
                {errors.nombre && touched.nombre && (
                  <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
                )}
              </div>
              <div className="mx-4">
                <label
                  htmlFor="autor"
                  className="block text-sm text-blue-900 font-semibold"
                >
                  Autor:
                </label>
                <Field
                  type="text"
                  id="autor"
                  name="autor"
                  className="p-2 mt-1 border rounded-md text-blue-700 w-full "
                />
                {errors.autor && touched.autor && (
                  <p className="text-red-500 text-xs mt-1">{errors.autor}</p>
                )}
              </div>

              <div className="mx-4">
                <label
                  htmlFor="edicion"
                  className="block text-sm text-blue-900 font-semibold"
                >
                  Edición:
                </label>
                <Field
                  type="text"
                  id="edicion"
                  name="edicion"
                  className="p-2 mt-1 border rounded-md text-blue-700 w-full "
                />
                {errors.edicion && touched.edicion && (
                  <p className="text-red-500 text-xs mt-1">{errors.edicion}</p>
                )}
              </div>

              <div className="mx-4">
                <label
                  htmlFor="pais"
                  className="block text-sm font-semibold text-blue-900"
                >
                  País:
                </label>
                <Field
                  type="text"
                  id="pais"
                  name="pais"
                  className="p-2 mt-1 border rounded-md text-blue-700 w-full "
                />
                {errors.pais && touched.pais && (
                  <p className="text-red-500 text-xs mt-1">{errors.pais}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Guardando...' : 'Guardar'}
              </button>
            </div>
          </FormikForm>
        )}
      </Formik>
      {isSubmitted && <SuccessMessage book={books} />}
    </div>
  );
};

export default Form;
