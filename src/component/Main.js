import { createContext, useState } from "react";
import Dial from "./Dial";
import useTime from "./useTime";

const Main = () => {
  const [facesShow, setFacesShow] = useState(false);
  const [dialStatus, setDialStatus] = useState(true);
  const facesFun = () => {
    setFacesShow(true);
    setDialStatus(false);
  };
  return (
    <>
      <Dial
        facesFun={facesFun}
        facesShow={facesShow}
        setFacesShow={setFacesShow}
        dialStatus={dialStatus}
        setDialStatus={setDialStatus}
      />
    </>
  );
};
export default Main;
