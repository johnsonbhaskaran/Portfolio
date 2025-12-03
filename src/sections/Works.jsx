import { useTheme } from "../themeContext";
import { ArrowUpRight } from "feather-icons-react";

const Works = () => {
  const { theme } = useTheme();

  const projectData = [
    {
      id: 1,
      name: "Biz listing",
      thumbnail: "",
      liveLink: "",
      gitHub: "https://biz-listing.netlify.app/",
    },
    {
      id: 2,
      name: "Ev-olution",
      thumbnail: "",
      liveLink: "",
      gitHub: "https://ev-era.netlify.app//",
    },
    {
      id: 3,
      name: "FOOD-from-HOME",
      thumbnail: "",
      liveLink: "",
      gitHub: "https://food-from-home.netlify.app/",
    },
    {
      id: 3,
      name: "Desi Etsy",
      thumbnail: "",
      liveLink: "",
      gitHub: "https://desi-etsy-clone.netlify.app/",
    },
  ];

  return (
    <div className='h-screen'>
      <div className='mx-auto max-w-xs md:max-w-2xl xl:max-w-5xl h-1/4 text-[32px] md:text-5xl xl:text-6xl md:text-left text-center'>
        <h2 className='flex justify-center xl:justify-start items-center h-full'>My Works 💜</h2>
      </div>
      <div className='mx-auto h-2/3 md:h-3/5'>
        <div className='flex gap-4 h-full overflow-x-auto no-scrollbar'>
          <div className='pl-8 md:pl-38 xl:pl-106'></div>
          {projectData.map((item) => {
            return (
              <a
                href={item.gitHub}
                key={item.id}
                className={`${
                  theme === "light" ? "bg-[#D9D9D9] text-[#333]" : "bg-[#333] text-[#DDD]"
                } rounded-[44px] md:rounded-[66px] w-xl md:w-3xl xl:w-5xl h-4/5 xl:h-full shrink-0 relative`}
              >
                <div className='bottom-0 absolute inset-x-0 xl:p-12 px-8 md:px-12 py-4 md:py-6'>
                  <div className='flex justify-between items-center'>
                    <h3 className='text-2xl md:text-4xl xl:text-5xl'>{item.name}</h3>
                    <div className='bg-[salmon] mb-4 p-0 md:p-2.5 rounded-[6px] cursor-pointer'>
                      <ArrowUpRight className='size-10 md:size-12' />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}

          <div className='pl-8 md:pl-38 xl:pl-106'></div>
        </div>
      </div>
    </div>
  );
};
export default Works;
