import { useTheme } from "../themeContext";
import pic from "./../assets/Johnson_Bhaskaran.png";
import cup from "./../assets/cup.png";

const Intro = () => {
  const { theme } = useTheme();

  return (
    <div className='flex flex-col justify-evenly items-center w-full h-screen'>
      <div className='flex flex-col justify-evenly max-w-xs md:max-w-2xl xl:max-w-5xl'>
        <p className='text-4xl/16'>Welcome to</p>
        <h1 className='text-5xl xl:text-7xl'>
          <span
            className={`${
              theme === "light" ? "text-[#FFD700]" : "text-[#000080]"
            }  decoration-wavy underline underline-offset-[18px]`}
          >
            JohnsonB's
          </span>{" "}
          portfolio
        </h1>
      </div>
      <div className='flex xl:flex-row flex-col justify-evenly xl:justify-between items-center w-xs md:w-2xl xl:w-4xl h-3/4'>
        <img src={pic} alt='casual looking Johnson Bhaskaran head shot' />
        <h2 className='text-5xl/18 xl:text-7xl/24 text-center xl:text-right'>
          I'm a player <br />
          <img className='inline mr-6 mb-2' src={cup} alt='' />
          I play <br />
          Design <br />
          Frontend <br />
          Backend <br />
        </h2>
      </div>
    </div>
  );
};
export default Intro;
