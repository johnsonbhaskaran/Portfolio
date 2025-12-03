import { useTheme } from "../themeContext";

const Hi = () => {
  const { theme } = useTheme();

  return (
    <div className='flex flex-col items-center bg-white/0 w-full h-screen'>
      <div className='flex flex-col justify-center items-center w-10/12 h-1/4'>
        <p className='text-xl/8 md:text-3xl/20 xl:text-4xl/18'>I'm pleased to meet you!</p>
        <h2 className='text-[32px]/12 md:text-5xl xl:text-6xl'>Send a Hi! 🤗</h2>
      </div>
      <div className='flex flex-col max-w-xs md:max-w-2xl xl:max-w-4xl h-2/4'>
        <form className='h-full text-xl md:text-3xl xl:text-4xl'>
          <input
            type='text'
            className='px-4 md:px-8 md:py-12 border border-b-0 focus:outline-none w-full h-1/6'
            placeholder='Name'
          />
          <input
            type='text'
            className='px-4 md:px-8 md:py-12 border border-b-0 focus:outline-none w-full h-1/6'
            placeholder='Email'
          />
          <textarea
            name='message'
            id='message'
            className='p-4 md:p-8 border focus:outline-none w-full h-3/6 no-scrollbar'
            placeholder='Message...'
          ></textarea>
          <button
            className={`${theme === "light" ? "bg-[#6A5ACD]" : "bg-[#9ACD32]"}  w-full h-1/6`}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Hi;
