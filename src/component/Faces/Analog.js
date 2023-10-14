import { useEffect } from "react";
import { useRef } from "react";
import useTime from "../useTime";
const Analog = ({
  hourStyle,
  minuteStyle,
  secondStyle,
  faceBg,
  facesFun,
  analogTheme,
  digitalTheme,
}) => {
  const numbersRef = useRef();
  // const numbers = () => {
  //   for (let i = 1; i <= 12; i++) {
  //     const div = document.createElement("div");
  //     div.textContent = i;
  //     div.classList.add("numbers");
  //     numbersRef.current.appendChild(div);
  //   }
  // };
  // useEffect(() => {
  //   numbers();
  // }, []);

  const { hour, minute, second } = useTime();
  return (
    <>
      <div
        className="analogDiv"
        style={{ backgroundImage: `url(${faceBg})` }}
        onDoubleClick={facesFun}
      >
        {analogTheme && (
          <div className="numbersDiv" ref={numbersRef}>
            <div className="handsDiv">
              <div className="hour-hand" style={hourStyle}></div>
              <div className="minute-hand" style={minuteStyle}></div>
              <div className="second-hand" style={secondStyle}></div>
              <div className="centerPoint"></div>
            </div>
          </div>
        )}
        {digitalTheme && (
          <div className="digitalDiv">
            <div className="timeDiv">
              <span className="hourSpan">{hour}:</span>
              <span className="minuteSpan">{minute}</span>
            </div>
            {/* <span className="secondSpan">{second}</span> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Analog;
