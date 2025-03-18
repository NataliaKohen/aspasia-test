import { FavoritesBooks, FavoritesTableProps } from '../../types';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';

const columns: ColumnDef<FavoritesBooks>[] = [
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
      const released = row.original.released;
      const releaseDate = released ? new Date(released) : new Date();
      return releaseDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
];

export const FavoritesTable: React.FC<FavoritesTableProps> = ({
  favorites,
}) => {
  const table = useReactTable({
    data: favorites,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  if (favorites.length === 0) {
    return (
      <div className="flex justify-center m-20">
        <p className="text-lg text-blue-900">Aún no tienes libros favoritos </p>
      </div>
    );
  }
  const extractBookIdFromUrl = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  return (
    <div className=" flex justify-center m-20 ">
      <table className=" table-auto  border border-blue-300">
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
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const bookId = extractBookIdFromUrl(row.original.url);

            return (
              <tr className="hover:bg-blue-50 cursor-pointer">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 text-sm text-blue-800 border-b"
                  >
                    {' '}
                    <Link key={row.id} to={`/books/${bookId}`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Link>
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
