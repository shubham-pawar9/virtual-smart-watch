import { useEffect, useRef, useState } from "react";
import Analog from "./Faces/Analog";
import useTime from "./useTime";
import FaceUI from "./Faces/FaceUI";
import Menu from "./Menu";
import Brightness from "./Faces/Brightness";
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
}) => {
  const [faceBg, setFaceBg] = useState("./images/faces/1.jpg");

  const { hour, minute, second, hourRotation, minuteRotation, secondRotation } =
    useTime();
  const [hourStyle, setHourStyle] = useState({});
  const [minuteStyle, setMinuteStyle] = useState({});
  const [secondStyle, setSecondStyle] = useState({});

  useEffect(() => {
    // Update the styles for rotation
    setHourStyle({ transform: `rotate(${hourRotation}deg)` });
    setMinuteStyle({ transform: `rotate(${minuteRotation}deg)` });
    setSecondStyle({ transform: `rotate(${secondRotation}deg)` });
  }, [secondRotation]);
  // console.log(facesShow);
  // console.log(facesShow, dialStatus);
  // console.log(hourRotation, minuteRotation, secondRotation);
  return (
    <>
      <div className="mainDiv">
        <div className="dialDiv">
          <div className="dialScreen" onDoubleClick={facesFun}>
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
              />
            )}
            {menuShowStatus && (
              <Menu
                setFacesShow={setFacesShow}
                setMenuShowStatus={setMenuShowStatus}
                setBrightnessShow={setBrightnessShow}
                setDialStatus={setDialStatus}
              />
            )}
            {brightnessShow && <Brightness />}
          </div>
        </div>
        <div className="buttonDiv" onClick={menuShow}></div>
        <div className="chargingDiv"></div>
      </div>
    </>
  );
};
export default Dial;
