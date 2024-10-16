import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

// interface SimpleTableProps<T> {
//   columns: ColumnDef<T, any>[];
//   data: T[];
//   styleOptions?: {
//     fixedTableLayout?: boolean;
//     wrapHeaders?: boolean
//   }
// }

export function SimpleTable({
  columns,
  data,
  styleOptions = { fixedTableLayout: false, wrapHeaders: false },
}) {
  const [pageSize, setPageSize] = useState(5);
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
    <div
      style={{
        overflow: "hidden",
        background: "white",
        borderRadius: "5px",
        fontSize: "0.875rem",
        fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
      }}
    >
      {/* Table wrapper with horizontal scroll */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            ...styles.TABLE,
            tableLayout: styleOptions.fixedTableLayout ? "fixed" : "auto",
          }}
        >
          <thead style={styles.THEAD}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      ...styles.THEAD_TR_TH,
                      textWrap: styleOptions.wrapHeaders ? "wrap" : "nowrap",
                    }}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {/* ↑↓ ⬆️⬇️ */}

                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {{
                      asc: (
                        <>
                          <span
                            style={{
                              position: "relative",
                              userSelect: "none",
                              marginInline: "5px",
                            }}
                          >
                            {/* <span style={{ position: "absolute", top: "100%", translate: "(0,-100%)", right: "110%" }}> */}
                            ↑{/* </span> */}
                          </span>
                        </>
                      ),
                      desc: (
                        <>
                          <span
                            style={{
                              position: "relative",
                              userSelect: "none",
                              marginInline: "5px",
                            }}
                          >
                            {/* <span style={{ position: "absolute", top: "100%", translate: "(0,-100%)", right: "110%" }}> */}
                            ↓{/* </span> */}
                          </span>
                        </>
                      ),
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} style={styles.TBODY_TR}>
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

      {/* Pagination controls */}
      <div style={styles.PAGINATION}>
        {/* Rows per page selection */}
        <div>
          <label htmlFor="pageSize">Rows per page:</label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={handlePageSizeChange}
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
        <div style={styles.PAGINATION_CTRLS}>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
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
                style={{
                  ...styles.PAGINATION_CTRLS_BTNS,
                  paddingInline: "6px",
                  width: "auto",
                  fontWeight:
                    table.getState().pagination.pageIndex === page
                      ? "bold"
                      : "normal",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                {page + 1} {/* Page numbers are 1-based for display */}
              </button>
            ))}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            style={{
              ...styles.PAGINATION_CTRLS_BTNS,
              fontWeight: table.getCanNextPage() ? "800" : "400",
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleTable;

const styles = {
  TABLE: {
    width: "100%",
    borderRadius: "inherit",
    borderCollapse: "collapse",
    // tableLayout: "fixed",
  },
  THEAD: {
    display: "table-header-group",
    borderRadius: "inherit",
  },
  THEAD_TR: {
    display: "table-row",
    verticalAlign: "middle",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
  },
  THEAD_TR_TH: {
    position: "relative",
    borderRadius: "inherit",
    textAlign: "left",
    padding: "10px",
    cursor: "pointer",
    textWrap: "nowrap",
    userSelect: "none",

    fontSize: "0.875rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.01071em",
    borderBottom: "2px solid rgba(0,0,0, 0.3)",
    fontWeight: "700",
  },
  TBODY: {},
  TBODY_TR: {
    borderBottom: "1px solid black",
  },
  TBODY_TR_TD: {
    borderRadius: "inherit",
    textAlign: "left",
    padding: "10px",
    textWrap: "nowrap",

    fontSize: "0.875rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.01071em",
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    fontWeight: "400",
  },

  PAGINATION: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
    paddingInline: "10px",
    paddingBottom: "5px",
    fontSize: "0.8rem",
  },
  PAGINATION_DROPDOWN: {
    marginLeft: "8px",
    padding: "5px",
    border: "1px solid black",
    background: "transparent",
  },
  PAGINATION_CTRLS: {
    alignItems: "center",
    display: "flex",
    gap: "8px",
  },
  PAGINATION_CTRLS_BTNS: {
    padding: "8px",
    border: "none",
    outline: "none",
    background: "transparent",
    cursor: "pointer",

    width: "64px",
  },
};
