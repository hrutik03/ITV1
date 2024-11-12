import {
  TableBody,
  TableCell,
  TableRow,
  Table as TableWrapper,
} from "@/components/ui/table";
import { Table, flexRender } from "@tanstack/react-table";

import TableHeaderCustom from "./TableheaderCustom";
import LoadingSpinner from "./LoadingSpinner";

type ReusableTableProps<T> = {
  table: Table<T>;
  hasActions?: boolean;
  loading?: boolean;
};

const ReusableTable = <T,>({
  table,
  hasActions,
  loading,
}: ReusableTableProps<T>) => {
  return (
    <div className="table-wrapper relative">
      {/* Make this container scrollable */}
      <TableWrapper>
        {/* Pass down props for header styling */}
        <TableHeaderCustom table={table} hasActions={hasActions} />

        <TableBody className="overflow-hidden">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="p-0 border-none group even:bg-[#fafafb]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="table-cell py-0 h-[44px] text-sm first:sticky first:left-0 first:z-30 last:sticky last:right-0 last:z-30"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
              >
                {loading ? <LoadingSpinner /> : <p>No results.</p>}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableWrapper>
    </div>
  );
};

export default ReusableTable;
