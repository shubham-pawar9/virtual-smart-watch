const Menu = ({
  setFacesShow,
  setMenuShowStatus,
  setBrightnessShow,
  setDialStatus,
  setStopWatchShow,
}) => {
  return (
    <>
      <div className="menuDiv">
        <ul>
          <li
            className="menuList"
            onClick={() => {
              setFacesShow(true);
              setMenuShowStatus(false);
            }}
          >
            Dial Background
          </li>
          <li
            className="menuList"
            onClick={() => {
              setBrightnessShow(true);
              setMenuShowStatus(false);
              setDialStatus(false);
            }}
          >
            Brightness
          </li>
          <li
            className="menuList"
            onClick={() => {
              setStopWatchShow(true);
              setMenuShowStatus(false);
              setDialStatus(false);
              setBrightnessShow(false);
            }}
          >
            Stop watch
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
