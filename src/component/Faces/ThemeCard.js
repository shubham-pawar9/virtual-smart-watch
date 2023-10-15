import analogIcon from "../../images/analog.png";
import digitalIcon from "../../images/digital.png";
const ThemeCard = ({
  setDigitalTheme,
  setAnalogTheme,
  setDialStatus,
  setDialThemeShow,
}) => {
  const handleDigitalSelect = () => {
    setDigitalTheme(true);
    setAnalogTheme(false);
    setDialStatus(true);
    setDialThemeShow(false);
  };
  const handleAnalogSelect = () => {
    setAnalogTheme(true);
    setDigitalTheme(false);
    setDialStatus(true);
    setDialThemeShow(false);
  };
  return (
    <>
      <div className="themeCard">
        <div className="analogCard" onClick={handleAnalogSelect}>
          <span>Analog Dial</span>
          <img className="typeIcon" src={analogIcon} />
        </div>
        <hr className="hrLine" />
        <div className="digitalCard" onClick={handleDigitalSelect}>
          <span>Digital Dial</span>
          <img className="typeIcon" src={digitalIcon} />
        </div>
      </div>
    </>
  );
};
export default ThemeCard;
