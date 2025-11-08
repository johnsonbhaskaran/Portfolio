import { useTheme } from "../themeContext";
import { Check } from "feather-icons-react";
import LoadingLight from "./../assets/Loading_light.svg";
import LoadingDark from "./../assets/Loading_dark.svg";

const Prowess = () => {
  const { theme } = useTheme();

  return (
    <div className='flex flex-col justify-evenly items-center gap-8 h-screen'>
      <h1 className='w-5xl text-6xl'>My Prowess 🚀</h1>
      <div
        className={`flex flex-wrap items-center gap-4 w-4xl ${
          theme === "light" ? "text-white" : "text-[#333]"
        }`}
      >
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          JavaScript
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          React
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          Node
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          HTML
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          Express
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          MongoDB
        </div>

        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          CSS
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          Canva
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          Figma
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          Photoshop
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <Check
            className={`${
              theme === "light" ? "bg-white text-[#6A5ACD]" : "bg-[#333] text-[#9ACD32]"
            } p-0.5 rounded-full size-8 `}
          />
          Illustrator
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <img src={theme === "light" ? LoadingDark : LoadingLight} alt='' />
          Python
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <img src={theme === "light" ? LoadingDark : LoadingLight} alt='' />
          Java
        </div>
        <div
          className={`${
            theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"
          } px-8 py-4 rounded-full text-3xl flex items-center gap-2`}
        >
          <img src={theme === "light" ? LoadingDark : LoadingLight} alt='' />
          Spline
        </div>
      </div>
    </div>
  );
};
export default Prowess;
