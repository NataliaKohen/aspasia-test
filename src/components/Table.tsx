import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
// export interface Book {
//     name: string;
//     authors: string[];
//     numberOfPages: number;
//     publisher: string;
//     country: string;
//     released: string;
//     characters: string[];
//     povCharacters: string[];
//   }
interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  country: string;
  dayofbirth: string;
}
const data: User[] = [
  {
    id: 1,
    name: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    country: 'USA',
    dayofbirth: '1990-01-01',
  },
  {
    id: 2,
    name: 'Jane',
    lastname: 'Smith',
    email: 'jane.smith@example.com',
    country: 'UK',
    dayofbirth: '1985-02-20',
  },
];

const columns: ColumnDef<User>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    footer: 'miId',
  },
  {
    header: 'Name',
    accessorKey: 'name',
    footer: 'mi nombre',
  },
  {
    header: 'Lastname',
    accessorKey: 'lastname',
    footer: 'mi apellido',
  },
  {
    header: 'Email',
    accessorKey: 'email',
    footer: 'mi mail',
  },
  {
    header: 'Country',
    accessorKey: 'country',
    footer: 'mi pais',
  },
  {
    header: 'Day of birth',
    accessorKey: 'dayofbirth',
    footer: 'mi fecha de nac',
  },
];
const Table = () => {
  const tabla = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
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
                <td>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {tabla.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((footer) => (
                <th key={footer.id}>
                  {flexRender(
                    footer.column.columnDef.footer,
                    footer.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
