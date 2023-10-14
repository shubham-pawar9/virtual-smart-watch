import { useState, useEffect, useRef } from "react";

const FaceUI = ({ setFaceBg, setDialStatus, setFacesShow }) => {
  const faceRef = useRef();
  const selectFaceFun = (src) => {
    setFaceBg(src);
    setDialStatus(true);
    setFacesShow(false);
  };

  const faceLoad = () => {
    for (let i = 1; i <= 17; i++) {
      const div = document.createElement("div");

      div.classList.add("faces");
      const img = document.createElement("img");
      img.src = `${process.env.PUBLIC_URL}/images/faces/${i}.jpg`;
      div.appendChild(img);
      faceRef.current.appendChild(div);
      img.addEventListener("click", () => selectFaceFun(img.src));
    }
  };

  useEffect(() => {
    faceLoad();
  }, []);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    console.log(reader);
    reader.onloadend = () => {
      setFaceBg(reader.result);
      setDialStatus(true);
      setFacesShow(false);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="faceUIDiv" ref={faceRef}>
        <label htmlFor="file-upload" className="customFileUploadLabel">
          Select from Gallery
        </label>
        <input
          id="file-upload"
          type="file"
          className="faces"
          onChange={(e) => handleImageSelect(e)}
        />
      </div>
    </>
  );
};

export default FaceUI;
