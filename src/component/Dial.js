import { useEffect, useRef, useState } from "react";
import Analog from "./Faces/Analog";
import useTime from "./useTime";
import FaceUI from "./Faces/FaceUI";
const Dial = ({
  facesFun,
  facesShow,
  setFacesShow,
  dialStatus,
  setDialStatus,
}) => {
  const [faceBg, setFaceBg] = useState();

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
  console.log(facesShow, dialStatus);
  // console.log(hourRotation, minuteRotation, secondRotation);
  return (
    <>
      <div className="mainDiv">
        <div className="dialDiv">
          <div className="dialScreen" onDoubleClick={facesFun}>
            {facesShow && !dialStatus && (
              <FaceUI
                setFaceBg={setFaceBg}
                setDialStatus={setDialStatus}
                setFacesShow={setFacesShow}
              />
            )}
            {!facesShow && dialStatus && (
              <Analog
                faceBg={faceBg}
                hourStyle={hourStyle}
                minuteStyle={minuteStyle}
                secondStyle={secondStyle}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Dial;
