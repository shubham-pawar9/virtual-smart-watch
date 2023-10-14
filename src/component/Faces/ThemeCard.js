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
        </div>
        <div className="digitalCard" onClick={handleDigitalSelect}>
          <span>Digital Dial</span>
        </div>
      </div>
    </>
  );
};
export default ThemeCard;
