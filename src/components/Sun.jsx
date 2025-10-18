import { useState } from "react";
import SunON from "../assets/Sun-ON.svg";
import SunOFF from "../assets/Sun-OFF.svg";

const Sun = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className='top-0 left-0 z-20 sticky size-16 sm:size-full'>
      {darkmode ? (
        <img
          onClick={() => setDarkmode(!darkmode)}
          className='cursor-pointer'
          src={SunON}
          alt='theme swtich icon'
        />
      ) : (
        <img
          onClick={() => setDarkmode(!darkmode)}
          className='cursor-pointer'
          src={SunOFF}
          alt='theme swtich icon'
        />
      )}
    </div>
  );
};
export default Sun;
