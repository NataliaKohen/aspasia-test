import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { Book } from '../types';
import { useBooks } from '../context/BookContext';
import { useState } from 'react';

const columns: ColumnDef<Book>[] = [
  {
    header: 'Nombre',
    accessorKey: 'name',
    enableSorting: true,
  },
  {
    header: 'Autor',
    accessorKey: 'authors',
    enableSorting: true,
    cell: ({ row }) => row.original.authors.join(', '),
  },
  {
    header: 'Editora',
    accessorKey: 'publisher',
    enableSorting: true,
  },
  {
    header: 'País',
    accessorKey: 'country',
    enableSorting: true,
  },
  {
    header: 'Fecha de publicación',
    accessorKey: 'released',
    enableSorting: true,
    cell: ({ row }) => {
      const releaseDate = new Date(row.original.released);
      return releaseDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
];

const BookTable = () => {
  const bookContext = useBooks();
  const books = bookContext?.books ?? [];
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data: books,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });
  if (!bookContext) return <p>Loading...</p>;
  return (
    <div className="mt-20 ">
      <input
        type="text"
        placeholder="Buscar..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <table className="min-w-full table-auto  border border-blue-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-blue-100">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-2 text-left text-sm font-semibold text-blue-900 border-b"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === 'asc' ? ' 🔼' : ''}
                  {header.column.getIsSorted() === 'desc' ? ' 🔽' : ''}
                  <input
                    type="text"
                    onChange={(e) =>
                      header.column.setFilterValue(e.target.value)
                    }
                    placeholder={`Filtrar por ${header.column.columnDef.header}`}
                    className="w-full p-1 mt-1 border rounded bg-white"
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-blue-50 cursor-pointer">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 py-2 text-sm text-blue-800 border-b"
                >
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

export default BookTable;
