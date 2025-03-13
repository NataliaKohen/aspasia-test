import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import { Book } from '../types';
import { useBooks } from '../context/BookContext';

// Columnas de la tabla
const columns: ColumnDef<Book>[] = [
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  {
    header: 'Autor',
    accessorKey: 'authors',
    cell: ({ row }) => row.original.authors.join(', '), // Convertir array a string
  },
  {
    header: 'Número de páginas',
    accessorKey: 'numberOfPages',
  },
  {
    header: 'Editora',
    accessorKey: 'publisher',
  },
  {
    header: 'País',
    accessorKey: 'country',
  },
  {
    header: 'Fecha de publicación',
    accessorKey: 'released',
  },
  {
    header: 'Personajes',
    accessorKey: 'characters',
    cell: ({ row }) => row.original.characters.length, // Mostrar cantidad de personajes
  },
  {
    header: 'Pov Characters',
    accessorKey: 'povCharacters',
    cell: ({ row }) => row.original.povCharacters.join(', '), // Convertir array a string
  },
];

const Tableb = () => {
  const bookContext = useBooks();
  const books = bookContext?.books ?? [];

  console.log(books);

  const tabla = useReactTable({
    data: books,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  if (!bookContext) return <p>Loading...</p>;
  return (
    <div>
      <table>
        <thead>
          {tabla.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tabla.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tableb;
