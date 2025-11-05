import "./App.css";
import Sun from "./components/Sun";
import Quote from "./sections/Quote";
import Intro from "./sections/Intro.jsx";
import Prowess from "./sections/Prowess.jsx";
import Works from "./sections/Works.jsx";
import Hire from "./sections/Hire.jsx";
import Hi from "./sections/Hi.jsx";
import Footer from "./sections/Footer.jsx";
import { useTheme } from "./themeContext.jsx";

function App() {
  const { theme } = useTheme();

  const dark = ` bg-gradient-to-r from-0% from-white via-[#b1b1b1] via-[#cdcdcd] via-36% via-64% to-[#999] to-100% text-[#333]`;
  const light = ` bg-gradient-to-r from-0% from-[#333] via-[#252525] via-[#1c1c1c] via-23% via-56% to-[#131313] to-100% text-[#ddd]`;

  return (
    <div className={`static ${theme === "dark" ? dark : light}`}>
      <Sun />
      <div className='md:mx-auto md:max-w-2/3'>
        {/* <Quote /> */}
        <Intro />
        <Prowess />
        <Works />
        <Hire />
        <Hi />
        <Footer />
      </div>
    </div>
  );
}

export default App;
