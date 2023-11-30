export default function Activity({
  onClick,
  photo,
  name,
  open,
  close,
  photoType,
  cat_icon,
  cat_name,
}) {
  return (
    <div
      className="d-flex border border-2 border-secondary rounded shadow-lg p-2 gap-3"
      style={{ backgroundColor: "#c9c9c9", minWidth: "350px" }}
      onClick={onClick}
    >
      <img
        className="border border-secondary rounded-4"
        src={
          photoType === "fsq"
            ? photo.prefix + "100x100" + photo.suffix
            : photo.prefix + "bg_100" + photo.suffix
        }
      />
      <div className="d-flex flex-column w-100">
        <p className="fw-bold" style={{ fontSize: "15px" }}>
          {name}
        </p>
        <div className="d-flex justify-content-left w-100 gap-2" style={{ fontSize: "10px"}}>
          <p>Open : {open/100}</p>
          <p>Close : {close/100}</p>
        </div>
        <div className="mt-auto d-flex justify-content-end gap-2">
          <img
            className="border border-dark rounded-circle"
            style={{ width: "32px", height: "32px" }}
            src={cat_icon.prefix + "bg_32" + cat_icon.suffix}
          />
          <p className="my-2" style={{ fontSize: "10px" }}>
            {cat_name}
          </p>
        </div>
      </div>
    </div>
  );
}
