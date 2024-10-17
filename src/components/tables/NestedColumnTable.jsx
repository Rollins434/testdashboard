import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { styles } from "./tableStyles";

// interface NestedColumnTableProps<T> {
//   columns: ColumnDef<T, any>[];
//   data: T[];
//   styleOptions?: {
//     rowBackgroundColors: Array<string | null>
//     rowTextColors: Array<string | null>
//   }
// }

function NestedColumnTable({
  columns,
  data,
  styleOptions = { rowBackgroundColors: [], rowTextColors: [] },
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div style={styles.CONTAINER}>
      <div style={{ overflowX: "auto" }}>
        <table style={styles.TABLE}>
          <thead style={styles.THEAD}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                data-headerGroup={headerGroup.id}
                key={headerGroup.id}
                style={styles.THEAD_TR}
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      ...styles.THEAD_TR_TH,
                      textAlign: header.colSpan > 1 ? "center" : "left",
                      borderBottomColor:
                        headerGroup.id === "0" &&
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        ) == " "
                          ? "white"
                          : "black",
                    }}
                    colSpan={header.colSpan} // Ensure colSpan is applied
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
          <tbody style={styles.TBODY}>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                style={{
                  ...styles.TBODY_TR,
                  backgroundColor: styleOptions?.rowBackgroundColors.length
                    ? styleOptions.rowBackgroundColors[Number(row.id)] ||
                      "default"
                    : "default",
                  color: styleOptions?.rowTextColors
                    ? styleOptions.rowTextColors[Number(row.id)] || "default"
                    : "default",
                }}
                data-rowid={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={styles.TBODY_TR_TD}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NestedColumnTable;
