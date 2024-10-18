import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import { styles } from "./tableStyles";
import { useState } from "react";

// interface NestedColumnTableProps<T> {
//   columns: ColumnDef<T, any>[];
//   data: T[];
//   showPagination?: boolean;
//   styleOptions?: {
//     rowBackgroundColors: Array<string | null>
//     rowTextColors: Array<string | null>
//   }
// }

function NestedColumnTable({
  datasetName,
  columns,
  data,
  showPagination = false,
  styleOptions = { rowBackgroundColors: [], rowTextColors: [] },
}) {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / pageSize),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
      sorting,
    },
    onSortingChange: setSorting,
    onPaginationChange: (updater) => {
      const newPaginationState =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater;
      setPageIndex(newPaginationState.pageIndex);
      setPageSize(newPaginationState.pageSize);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    table.setPageSize(Number(event.target.value));
  };

  return (
    <div style={styles.CONTAINER}>
      <div style={{ overflowX: "auto" }}>
        <table style={styles.TABLE}>
          <thead style={styles.THEAD}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                data-key={"headerGroup-" + headerGroup.id}
                key={datasetName + "-headerGroup-" + headerGroup.id}
                style={styles.THEAD_TR}
              >
                {headerGroup.headers.map((header) => (
                  <th
                    data-key={"header-" + header.index}
                    key={datasetName + "-header-" + header.index}
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
                key={datasetName + "-dataRow-" + row.id}
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
              >
                {row.getVisibleCells().map((cell, cellIdx) => (
                  <td
                    key={
                      datasetName +
                      "-dataRow-" +
                      row.id +
                      "-dataCell-" +
                      cellIdx
                    }
                    style={styles.TBODY_TR_TD}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPagination && (
        <>
          {/* Pagination controls */}
          <div className="pagination" style={styles.PAGINATION}>
            {/* Rows per page selection */}
            <div>
              <label htmlFor="pageSize">Rows per page:</label>
              <select
                id="pageSize"
                value={pageSize}
                onChange={handlePageSizeChange}
                className="pagination_dropdown"
                style={styles.PAGINATION_DROPDOWN}
              >
                {[5, 10, 20, 30].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Pagination controls */}
            <div className="pagination_ctrls" style={styles.PAGINATION_CTRLS}>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="pagination_ctrls_btns"
                style={{
                  ...styles.PAGINATION_CTRLS_BTNS,
                  fontWeight: table.getCanPreviousPage() ? "800" : "400",
                }}
              >
                ← Prev
              </button>

              {[
                table.getState().pagination.pageIndex - 1, // Previous page
                table.getState().pagination.pageIndex, // Current page
                table.getState().pagination.pageIndex + 1, // Next page
                table.getState().pagination.pageIndex + 2, // Next-next page
              ]
                .filter((page) => page >= 0 && page < table.getPageCount()) // Ensure pages are within bounds
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => table.setPageIndex(page)}
                    className="pagination_ctrls_btns"
                    style={{
                      ...styles.PAGINATION_CTRLS_BTNS,
                      width: "auto",
                      fontWeight:
                        table.getState().pagination.pageIndex === page
                          ? "bold"
                          : "normal",
                    }}
                  >
                    {page + 1} {/* Page numbers are 1-based for display */}
                  </button>
                ))}

              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="pagination_ctrls_btns"
                style={{
                  ...styles.PAGINATION_CTRLS_BTNS,
                  fontWeight: table.getCanNextPage() ? "800" : "400",
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NestedColumnTable;
