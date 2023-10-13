import { useEffect, useRef, useState } from "react";
import Analog from "./Faces/Analog";
import useTime from "./useTime";
import FaceUI from "./Faces/FaceUI";
import Menu from "./Menu";
import Brightness from "./Faces/Brightness";
import StopWatch from "./Faces/StopWatch";
import strap1 from "../images/strap-design/strap1.png";
import strap2 from "../images/strap-design/strap2.png";
import strap3 from "../images/strap-design/strap3.png";
import strap4 from "../images/strap-design/strap4.png";
import strap5 from "../images/strap-design/strap5.png";
import strap6 from "../images/strap-design/strap6.png";
import strap7 from "../images/strap-design/strap7.png";
import strap8 from "../images/strap-design/strap8.png";
import strap9 from "../images/strap-design/strap9.png";
import strap10 from "../images/strap-design/strap10.png";
const Dial = ({
  facesFun,
  facesShow,
  setFacesShow,
  dialStatus,
  setDialStatus,
  menuShow,
  menuShowStatus,
  setMenuShowStatus,
  brightnessShow,
  setBrightnessShow,
  setStopWatchShow,
  stopWatchShow,
}) => {
  const [faceBg, setFaceBg] = useState("./images/faces/1.jpg");

  const { hour, minute, second, hourRotation, minuteRotation, secondRotation } =
    useTime();
  const [hourStyle, setHourStyle] = useState({});
  const [minuteStyle, setMinuteStyle] = useState({});
  const [secondStyle, setSecondStyle] = useState({});
  const [dialBrightness, setDialBrightness] = useState("");
  const strapTopRef = useRef();
  const strapBottomRef = useRef();
  const dialRef = useRef(10);
  useEffect(() => {
    // Update the styles for rotation
    setHourStyle({ transform: `rotate(${hourRotation}deg)` });
    setMinuteStyle({ transform: `rotate(${minuteRotation}deg)` });
    setSecondStyle({ transform: `rotate(${secondRotation}deg)` });
  }, [secondRotation]);

  const handleStrapChange = (e) => {
    document.querySelector(".strap-icon.active").classList.remove("active");
    e.target.classList.add("active");
    strapTopRef.current.style.backgroundImage = `url("${process.env.PUBLIC_URL}/images/strap-design/${e.target.id}.jpg")`;
    strapBottomRef.current.style.backgroundImage = `url("${process.env.PUBLIC_URL}/images/strap-design/${e.target.id}.jpg")`;
  };
  useEffect(() => {
    strapTopRef.current.style.backgroundImage = `url("${process.env.PUBLIC_URL}/images/strap-design/strap1.jpg")`;
    strapBottomRef.current.style.backgroundImage = `url("${process.env.PUBLIC_URL}/images/strap-design/strap1.jpg")`;
  }, []);
  return (
    <>
      <div className="mainDiv">
        <div className="dialDiv">
          <div className="dialScreen" ref={dialRef}>
            {facesShow && (
              <FaceUI
                setFaceBg={setFaceBg}
                setDialStatus={setDialStatus}
                setFacesShow={setFacesShow}
              />
            )}
            {!facesShow && !menuShowStatus && dialStatus && !menuShowStatus && (
              <Analog
                faceBg={faceBg}
                hourStyle={hourStyle}
                minuteStyle={minuteStyle}
                secondStyle={secondStyle}
                facesFun={facesFun}
              />
            )}
            {menuShowStatus && (
              <Menu
                setFacesShow={setFacesShow}
                setMenuShowStatus={setMenuShowStatus}
                setBrightnessShow={setBrightnessShow}
                setDialStatus={setDialStatus}
                setStopWatchShow={setStopWatchShow}
              />
            )}
            {brightnessShow && <Brightness dialRef={dialRef} />}
            {stopWatchShow && <StopWatch />}
          </div>
        </div>
        <div className="buttonDiv" onClick={menuShow}></div>
        <div className="chargingDiv"></div>
        <div ref={strapTopRef} className="strapTop"></div>
        <div ref={strapBottomRef} className="strapBottom"></div>
        <div className="strap-select-left">
          <img
            id="strap1"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon active"
            src={strap1}
          />
          <img
            id="strap2"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap2}
          />
          <img
            id="strap3"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap3}
          />
          <img
            id="strap4"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap4}
          />
          <img
            id="strap5"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap5}
          />
        </div>
        <div className="strap-select-right">
          <img
            id="strap6"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap6}
          />
          <img
            id="strap7"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap7}
          />
          <img
            id="strap8"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap8}
          />
          <img
            id="strap9"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap9}
          />
          <img
            id="strap10"
            onClick={(e) => handleStrapChange(e)}
            className="strap-icon"
            src={strap10}
          />
        </div>
      </div>
    </>
  );
};
export default Dial;
