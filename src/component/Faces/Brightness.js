import { useRef, useState } from "react";

const Brightness = ({ dialRef }) => {
  const [sliderVal, setSliderVal] = useState(
    dialRef.current.style.opacity != ""
      ? dialRef.current.style.opacity * 10
      : 10
  );
  const handleSlider = (e) => {
    setSliderVal(e.target.value);
    dialRef.current.style.opacity = sliderVal / 10;
    // dialRef.current.style.opacity = sliderRef.current.value / 10;
    // console.log(sliderRef.current.value);
  };
  return (
    <>
      <div className="brightnessDiv">
        <input
          className="brightnessSlider"
          type="range"
          max="10"
          min="1"
          value={sliderVal}
          onChange={(e) => handleSlider(e)}
        />
      </div>
    </>
  );
};
export default Brightness;
