import { cn } from "@/lib/utils";
import { Table, flexRender } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

type TableHeaderCustomProps<T> = {
  table: Table<T>;
  hasActions?: boolean;
  className?: string;
};
const TableHeaderCustom = <T,>({
  table,
  className,
}: TableHeaderCustomProps<T>) => {
  return (
    <TableHeader className="table-header sticky -top-[2px] left-0 right-0 bg-[#FAFAFB] z-10 border-t  shadow-sm">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              className={cn(
                "table-head  bg-[#FAFAFB] text-xs py-0 h-[40px] text-nowrap sticky top-0 z-40 uppercase text-[#565E6C]",
                className
              )}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default TableHeaderCustom;
