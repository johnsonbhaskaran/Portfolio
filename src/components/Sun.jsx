import { useState } from "react";
import SunON from "../assets/Sun-ON.svg";
import SunOFF from "../assets/Sun-OFF.svg";

const Sun = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className='top-4 md:top-16 left-4 md:left-16 fixed'>
      <div className='size-16 sm:size-full'>
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
    </div>
  );
};
export default Sun;
