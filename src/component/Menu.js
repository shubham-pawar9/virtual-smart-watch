const Menu = ({
  setFacesShow,
  setMenuShowStatus,
  setBrightnessShow,
  setDialStatus,
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
        </ul>
      </div>
    </>
  );
};
export default Menu;
