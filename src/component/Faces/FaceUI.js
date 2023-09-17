import { useEffect, useRef } from "react";
// import '../../images/faces/1.jpg'
const FaceUI = ({ setFaceBg, setDialStatus, setFacesShow }) => {
  const faceRef = useRef();
  const selectFaceFun = (e) => {
    setFaceBg(e.target.src);
    console.log(e.target.src);
    setDialStatus(true);
    setFacesShow(false);
  };

  const faceLoad = () => {
    for (let i = 1; i <= 16; i++) {
      const div = document.createElement("div");

      div.classList.add("faces");
      const img = document.createElement("img");
      img.src = `${process.env.PUBLIC_URL}/images/faces/${i}.jpg`;
      div.appendChild(img);
      faceRef.current.appendChild(div);
      img.addEventListener("click", selectFaceFun);
    }
  };

  useEffect(() => {
    faceLoad();
  }, []);
  return (
    <>
      <div className="faceUIDiv" ref={faceRef}></div>
    </>
  );
};
export default FaceUI;
