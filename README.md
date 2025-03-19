# Prueba Técnica - Aspasia

# Aplicación de Lectura de Libros

Esta es una aplicación web que permite a los usuarios buscar, filtrar y explorar una lista de libros.
Utiliza la API pública "An API of Ice and Fire" para obtener los datos de los libros, y permite a los usuarios interactuar con una lista de libros, ordenarlos, buscarlos, y filtrarlos. Además, los usuarios pueden agregar libros a su lista de favoritos y ver detalles adicionales sobre cada uno.

### Interactividad

- **Búsqueda y filtrado de libros:** Los usuarios pueden buscar libros por título o autor. Existe un buscador principal que permite buscar por cualquiera de estos campos, y también hay un input específico para cada uno, lo que ofrece más flexibilidad al usuario para aplicar filtros más precisos.
- **Ordenar libros:** Los usuarios pueden ordenar los libros según cada campo de la tabla. Al hacer clic en el título de la columna, aparecerá un ícono que indica la dirección del orden (ascendente o descendente), facilitando la interacción con la lista de libros.
- **Detalles de los libros:** Al hacer clic en un libro, los usuarios acceden a la vista de detalles, donde pueden ver información adicional como la sinopsis y la calificación de los usuarios, además de poder agregar el libro a favoritos.
- - **Favoritos:** Los usuarios pueden marcar libros como favoritos, agregándolos a una lista especial para recordar o leer más tarde.Este ícono de favoritos solo aparece cuando el usuario entra a la vista de detalles de un libro, es decir, al hacer clic sobre el libro. -**Agregar libros:** Los usuarios pueden agregar nuevos libros a la lista utilizando un formulario de agregar libro. Tras completar el formulario, se muestran los detalles del libro agregado y, finalmente, el libro aparece en la tabla principal, proporcionando al usuario una confirmación visual de que se ha agregado con éxito.

## Herramientas y tecnologías utilizadas

- **React**: Librería principal para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para compilar y servir la aplicación.
- **TypeScript (modo estricto):**: Para obtener una mayor seguridad de tipos y escalabilidad.
- **Tailwind CSS**: Framework de CSS utilitario para diseñar la interfaz.
- **React Router**: Para manejar la navegación de las vistas.
- **Tanstack Table**: Para mostrar, ordenar y filtrar la lista de libros.
- **Formik**: Para el manejo y validación de formularios.
- **Zustand**: Para el manejo del estado de la aplicación.
- **Jest**: Para realizar pruebas unitarias.

## Requisitos previos

- **Node.js** (versión recomendada: v16 o superior)
- **npm** o **yarn**

### Instalación

### Clonar el repositorio

```bash
git clone https://github.com/NataliaKohen/aspasia-test
```

### Navegar a la carpeta del proyecto

```bash
cd  /ruta/al/proyecto/aspasia-test/
```

Instalar las dependencias:
` npm install` o `yarn install`

## Ejecución de la aplicación

Para ejecutar la aplicación usar
` npm run dev` o ` yarn dev`

Esto abrirá la aplicación en el navegador en http://localhost:5173

## Ejecución de las pruebas

Para ejecutar las pruebas de Jest, usar el siguiente comando:
` npm run test` o ` yarn test`

Las pruebas se ejecutarán en modo interactivo, y se podrán ver los resultados en la terminal.

## Ejecución de Storybook

Para ejecutar Storybook y ver los componentes aislados, puedes usar el siguiente comando:
`npm run storybook` o `yarn storybook`

Esto abrirá Storybook en tu navegador en [http://localhost:6006](http://localhost:6006).
Aquí podrás ver los componentes desarrollados, interactuar con ellos, y probar su comportamiento en diferentes estados.

# Opciones técnicas y arquitectónicas

- Estado global con Zustand
  A pesar de que en las instrucciones se indicaba el uso de React Context o Redux para el manejo del estado, decidí utilizar Zustand porque en proyectos anteriores lo he usado y me ha parecido más legible y sencillo. No requiere un Provider ni un contexto adicional, lo que facilita su integración. Esto hace que la aplicación sea más fácil de mantener y escalar, especialmente cuando se manejan estados simples y el rendimiento es una prioridad.

- Manejo de fechas con React Date Picker
  Utilicé react-datepicker para la selección de fechas en el formulario, ya que es más intuitivo y facilita la experiencia del usuario al permitirle elegir una fecha directamente desde un calendario.

- Íconos con React Icons
  Utilicé react-icons para incluir íconos para el manejo de favoritos y carga, ya que hace que la aplicación sea más intuitiva.

- Tabla interactiva con TanStack Table
  La aplicación utiliza TanStack Table (React Table) para mostrar la lista de libros, permitiendo a los usuarios ordenarlos, filtrarlos y buscarlos de manera eficiente.

- Navegación con React Router
  Usé React Router para manejar la navegación entre las vistas de la aplicación. Esto permite una estructura clara y facilita la gestión de rutas.

- Uso de TypeScript en modo estricto
  Opté por utilizar TypeScript en modo estricto, ya que proporciona una mejor seguridad de tipos y ayuda a prevenir errores en tiempo de desarrollo. Esto garantiza un código más robusto, mantenible y menos propenso a fallos.

- Formularios con Formik
  Utilicé Formik para el manejo y validación de formularios, ya que facilita la gestión del formulario para agregar nuevos libros.

# Mejoras pendientes

Una de las mejoras que no pude completar en esta entrega es la integración de Storybook para la documentación de los componentes. Aunque lo instalé y configuré, solo alcancé a implementar un par de componentes, sin haberlo finalizado completamente antes de la entrega. Me hubiera gustado completar esta tarea, ya que facilitaría la visualización y prueba de los componentes de manera aislada.

Además, sería me gustaría mejorar los estilos y optimizar la responsividad, asegurando que la aplicación se vea y funcione correctamente en una mayor variedad de dispositivos.

# Qué haría diferente si tuviera más tiempo

Si tuviera más tiempo, me enfocaría en:

Integrar Storybook para mejorar la visualización y prueba de los componentes de la interfaz.
Añadir pruebas más exhaustivas para la lógica del estado y las interacciones entre los componentes.
Optimizar detalles de rendimiento y accesibilidad, buscando formas de mejorar la eficiencia de la aplicación y su accesibilidad para todos los usuarios.
