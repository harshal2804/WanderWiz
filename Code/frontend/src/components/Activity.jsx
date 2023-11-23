export default function Activity({ photo, name, time, photoType, cat_icon, cat_name}) {
    return (
        <div className="d-flex border border-2 border-secondary rounded shadow-lg p-2 gap-3" style={{ backgroundColor: "#c9c9c9" }}>
            <img 
                className="border border-secondary rounded-4"
                src={photoType === "fsq" ? photo.prefix + "100x100" + photo.suffix : photo.prefix + "bg_100" + photo.suffix}
            />
            <div className="d-flex flex-column w-100">
                <p className="fw-bold">{name}</p>
                <p>Time</p>
                <div className="mt-auto d-flex justify-content-end gap-2">
                <img
                    className="border border-dark rounded-circle"
                    style={{ width: "32px", height: "32px" }}
                    src={cat_icon.prefix + "bg_32" + cat_icon.suffix}
                />
                <p className="my-2" style={{ fontSize: "10px" }}>{cat_name}</p>
                </div>
            </div>
        </div>
    );
}