export const styles = {
  CONTAINER: {
    overflow: "hidden",
    background: "white",
    borderRadius: "5px",
    fontSize: "0.875rem",
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
  },
  TABLE: {
    width: "100%",
    borderRadius: "inherit",
    borderCollapse: "collapse",
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
    whiteSpace: "break-spaces",
    marginInline: "2px",

    fontSize: "0.875rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.01071em",
    borderBottom: "2px solid black",
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
    paddingInline: "6px",
    border: "none",
    outline: "none",
    background: "transparent",
    cursor: "pointer",

    width: "64px",
  },
};
