import { useTheme } from "../themeContext";
import { ArrowUpRight } from "feather-icons-react";

const Works = () => {
  const { theme } = useTheme();

  const projectData = [
    {
      id: 1,
      name: "FOOD-from-HOME",
      thumbnail: "",
      liveLink: "",
      gitHub: "https://github.com/johnsonbhaskaran/Food-from-Home",
    },
    {
      id: 2,
      name: "Desi Etsy",
      thumbnail: "",
      liveLink: "",
      gitHub: "https://github.com/johnsonbhaskaran/Desi-Etsy",
    },
  ];

  return (
    <div className='h-screen'>
      <div className='mx-auto max-w-xs md:max-w-2xl xl:max-w-5xl h-1/4 text-5xl xl:text-6xl'>
        <h2 className='flex items-center h-full'>My Works 💜</h2>
      </div>
      <div className='mx-auto h-2/3'>
        <div className='flex gap-4 h-full overflow-x-auto no-scrollbar'>
          <div className='pl-38 xl:pl-106'></div>
          {projectData.map((item) => {
            return (
              <a
                href={item.gitHub}
                key={item.id}
                className={`${
                  theme === "light" ? "bg-[#D9D9D9] text-[#333]" : "bg-[#333] text-[#DDD]"
                } rounded-[66px] w-5xl h-4/5 xl:h-full shrink-0 relative`}
              >
                <div className='bottom-0 absolute inset-x-0 p-12'>
                  <div className='flex justify-between'>
                    <h3 className='text-4xl xl:text-5xl'>{item.name}</h3>
                    <div className='flex items-center bg-[salmon] p-2.5 rounded-[6px] cursor-pointer'>
                      <ArrowUpRight className='size-12' />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}

          <div className='pl-40 xl:pl-106'></div>
        </div>
      </div>
    </div>
  );
};
export default Works;
