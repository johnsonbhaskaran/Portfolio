import { useTheme } from "../themeContext";

const Hi = () => {
  const { theme } = useTheme();

  return (
    <div className='flex flex-col items-center bg-white/0 w-full h-screen'>
      <div className='flex flex-col justify-center items-center w-5xl h-1/4'>
        <p className='text-4xl/18'>I'm pleased to meet you!</p>
        <h2 className='text-6xl'>Send a Hi! 🤗</h2>
      </div>
      <div className='flex flex-col w-4xl h-2/3'>
        <form className='h-full text-4xl'>
          <input
            type='text'
            className='px-8 border border-b-0 focus:outline-none w-full h-1/6'
            placeholder='Name'
          />
          <input
            type='text'
            className='px-8 border border-b-0 focus:outline-none w-full h-1/6'
            placeholder='Email'
          />
          <textarea
            name='message'
            id='message'
            className='p-8 border focus:outline-none w-full h-3/6 no-scrollbar'
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
