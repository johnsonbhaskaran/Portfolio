const Hire = () => {
  return (
    <div className='flex flex-col items-center bg-white/0 w-full h-screen'>
      <div className='flex flex-col justify-center max-w-xs md:max-w-2xl xl:max-w-5xl h-1/4 md:text-left text-center'>
        <p className='text-xl/8 md:text-3xl/20 xl:text-4xl/16'>Yes you can hire me!</p>
        <h2 className='text-[32px]/12 md:text-5xl xl:text-7xl'>I'm available for Hire.🧑‍💻</h2>
      </div>
      <div className='flex flex-col justify-evenly items-center w-xl md:w-4xl h-3/4 text-xl md:text-3xl'>
        <div className='grid xl:grid-cols-2 w-2/4 xl:w-full cursor-pointer'>
          <a
            href='https://github.com/johnsonbhaskaran'
            className='p-6 border border-t-2 border-l-2'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/johnsonbhaskaran/'
            className='p-6 border border-t-2 border-r-2'
          >
            LinkedIn
          </a>
          <a href='https://www.behance.net/johnsonb' className='p-6 border border-b-2 border-l-2'>
            Behance
          </a>
          <a
            href='https://dribbble.com/johnsonbhaskaran'
            className='p-6 border border-r-2 border-b-2'
          >
            Dribbble
          </a>
        </div>
        <p className='text-base md:text-3xl'>
          send me an <span className='text-2xl md:text-5xl'>📫 </span>
          <a
            href='mailto:johnsonb@live.in'
            className={`decoration-wavy underline underline-offset-[12px]`}
          >
            johnsonb@live.in
          </a>
        </p>
      </div>
    </div>
  );
};
export default Hire;
