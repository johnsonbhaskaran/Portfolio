import SunON from "../assets/Sun-ON.svg";
import SunOFF from "../assets/Sun-OFF.svg";
import { useTheme } from "../themeContext";

const Sun = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='top-4 md:top-16 left-4 md:left-16 z-20 fixed'>
      <div className='size-16 sm:size-full'>
        <img
          onClick={toggleTheme}
          className='cursor-pointer'
          src={theme === "dark" ? SunON : SunOFF}
          alt='theme swtich icon'
        />
      </div>
    </div>
  );
};
export default Sun;
