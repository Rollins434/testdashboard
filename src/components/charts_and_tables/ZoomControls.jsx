const ZoomControls = ({ resetZoom, zoomIn, zoomOut }) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "10px",
        bottom: "10px",
        color: "white",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <button onClick={resetZoom}>RESET</button>
      <button onClick={zoomIn}>ZOOM IN</button>
      <button onClick={zoomOut}>ZOOM OUT</button>
    </div>
  );
};

export default ZoomControls;
