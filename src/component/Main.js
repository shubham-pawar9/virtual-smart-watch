import { createContext, useState } from "react";
import Dial from "./Dial";
import useTime from "./useTime";

const Main = () => {
  const [facesShow, setFacesShow] = useState(false);
  const [dialStatus, setDialStatus] = useState(true);
  const [menuShowStatus, setMenuShowStatus] = useState(false);
  const [brightnessShow, setBrightnessShow] = useState(false);
  const facesFun = () => {
    setFacesShow(true);
    setDialStatus(false);
  };
  const menuShow = () => {
    menuShowStatus ? setMenuShowStatus(false) : setMenuShowStatus(true);
    setFacesShow(false);
    setBrightnessShow(false);
    console.log(dialStatus);
    setDialStatus(true);
  };
  return (
    <>
      <Dial
        facesFun={facesFun}
        facesShow={facesShow}
        setFacesShow={setFacesShow}
        dialStatus={dialStatus}
        setDialStatus={setDialStatus}
        menuShow={menuShow}
        menuShowStatus={menuShowStatus}
        setMenuShowStatus={setMenuShowStatus}
        setBrightnessShow={setBrightnessShow}
        brightnessShow={brightnessShow}
      />
    </>
  );
};
export default Main;
