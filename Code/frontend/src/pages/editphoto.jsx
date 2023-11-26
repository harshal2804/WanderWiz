import React, { useState, useRef } from "react";

function Edit_Profile_Photo() {
  const [file, setFile] = useState();
  const fileInputRef = useRef(null);

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  }

  function handleImageClick() {
    fileInputRef.current.click();
  }

  return (
    <div className="Edit_Profile_Photo">
      <label>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <img
          src={file || "https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512"} 
          alt="Profile"
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
      </label>
    </div>
  );
}

export default Edit_Profile_Photo;
