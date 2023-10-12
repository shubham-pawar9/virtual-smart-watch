import { useEffect } from "react";
import { useRef } from "react";

const Analog = ({ hourStyle, minuteStyle, secondStyle, faceBg, facesFun }) => {
  const numbersRef = useRef();
  const numbers = () => {
    for (let i = 1; i <= 12; i++) {
      const div = document.createElement("div");
      div.textContent = i;
      div.classList.add("numbers");
      numbersRef.current.appendChild(div);
    }
  };
  useEffect(() => {
    numbers();
  }, []);
  return (
    <>
      <div
        className="analogDiv"
        style={{ backgroundImage: `url(${faceBg})` }}
        onDoubleClick={facesFun}
      >
        <div className="numbersDiv" ref={numbersRef}>
          <div className="handsDiv">
            <div className="hour-hand" style={hourStyle}></div>
            <div className="minute-hand" style={minuteStyle}></div>
            <div className="second-hand" style={secondStyle}></div>
            <div className="centerPoint"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analog;
