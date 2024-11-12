import { useEffect, useState } from "react";
import "./App.css";
import { data, FinalPreviewSubmitType, PreviewTradeDto } from "./lib/api";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowSelectionState,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import ReusableTable from "./components/ReusableTable";
import { cn } from "./lib/utils";

const TableColumns: ColumnDef<PreviewTradeDto>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="px-5">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            table.getIsSomePageRowsSelected()
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    size: 50,
    cell: ({ row }) => (
      <div {...row} className="px-5">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="h-4 w-4"
        />
      </div>
    ),
  },
  {
    accessorKey: "accountCode",
    header: "Account Code",
  },
  {
    accessorKey: "previewID",
    header: "Preview Id",
  },
  {
    accessorKey: "symbol",
    header: "",
  },
];

function App() {
  const [apiData, setApiData] = useState<FinalPreviewSubmitType>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [finaPayload, setFinalPayload] = useState<FinalPreviewSubmitType[]>([]);

  useEffect(() => {
    if (selectedSymbol === "") {
      setApiData(data[0]);
      setSelectedSymbol(data[0].symbol);
    } else {
      const index = data.findIndex((item) => item.symbol === selectedSymbol);
      setApiData(data[index]);
    }
  }, [selectedSymbol]);

  useEffect(() => {
    console.log(rowSelection);
  }, [rowSelection]);

  const table = useReactTable({
    data: apiData?.tradeActionPreviewResponseList || [],
    columns: TableColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getRowId: (row) => row.previewID,
    state: {
      sorting,
      globalFilter,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const onSubmitHandler = () => {};

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <div className="my-10 flex gap-5">
          {data.map((item) => (
            <p
              onClick={() => setSelectedSymbol(item.symbol)}
              className={cn(
                selectedSymbol === item.symbol ? "text-primary" : "",
                "cursor-pointer"
              )}
            >
              {item.symbol}
            </p>
          ))}
        </div>
        <Button onClick={onSubmitHandler}>Submit</Button>
      </div>
      <div>
        <ReusableTable table={table} hasActions />
      </div>
    </div>
  );
}

export default App;
