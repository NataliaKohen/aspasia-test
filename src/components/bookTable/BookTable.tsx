import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

import { useState } from 'react';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';

interface BookTableProps {
  books: Book[];
}

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
      const releaseDate = new Date(row.original.released || '');
      return releaseDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
];

export const BookTable: React.FC<BookTableProps> = ({ books }) => {
  const [globalFilter, setGlobalFilter] = useState('');
  const navigate = useNavigate();

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

  const extractBookIdFromUrl = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  return (
    <div className="mt-20 ">
      <input
        type="text"
        placeholder="Buscar..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="border border-blue-400 p-2 mb-4 w-full rounded"
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
          {table.getRowModel().rows.map((book) => {
            const bookId = extractBookIdFromUrl(book.original.url);

            return (
              <tr
                key={book.original.url}
                className="hover:bg-blue-50 cursor-pointer"
                onClick={() => {
                  navigate(`/books/${bookId}`);
                }}
              >
                {book.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 text-sm text-blue-800 border-b"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
