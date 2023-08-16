import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnDef,
} from '@tanstack/react-table';
import { useState } from 'react';
import sortDown from '../assets/sortDown.png';
import sortUp from '../assets/sortUp.png';
import sortingIcon from '../assets/sorting.png';
import CustomPagination from './common/CustomPagination';
import '../scss/table.scss';
import { StudentTable } from '../interface/patientCareDetails.interface';
import Search from './common/Search';
import CustomSelect from './common/CustomeSelect';

const Table = (props: {
  columns: ColumnDef<StudentTable>[];
  data: StudentTable[];
  classnames: string;
}) => {
  const { columns, data, classnames } = props;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState('');

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    onSortingChange: setSorting,
    state: {
      sorting,
      globalFilter: filtering,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const handlePagenation = (e: { selected: number }) => {
    table.setPageIndex(e.selected);
  };

  return (
    <div className="mt-4 table-wrapper">
      <div className={`${classnames}`}>
        <div className="row mx-0 p-3 table-header">
          <div className="col-sm-6">
            <CustomSelect
              pagesize={table.getState().pagination.pageSize}
              selectPage={table.setPageSize}
            />
          </div>
          <div className="col-sm-6">
            {' '}
            <div className="float-end">
              <Search filtering={filtering} onChange={setFiltering} />
            </div>
          </div>
        </div>
        <div className={`table-responsive ${classnames}`}>
          <table className="table table-hover">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="custom-table-head"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {!header.column.columnDef.sortUndefined === false &&
                        header.column.getIsSorted() === false &&
                        flexRender(
                          <img
                            src={sortingIcon}
                            className="img-fluid sort-icon"
                          />,
                          {},
                        )}

                      {
                        {
                          asc: (
                            <img src={sortUp} className="img-fluid sort-icon" />
                          ),
                          desc: (
                            <img
                              src={sortDown}
                              className="img-fluid sort-icon"
                            />
                          ),
                        }[(header.column.getIsSorted() as string) ?? null]
                      }
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {table.getPageCount() > 1 && (
          <CustomPagination
            pageCount={table.getPageCount()}
            handlePagenation={handlePagenation}
          />
        )}
        <p className="text-center mt-3">
          {table.getState().pagination.pageIndex + 1} -{' '}
          {table.getState().pagination.pageSize} of {table.getPageCount()}
        </p>
      </div>
    </div>
  );
};

export default Table;
