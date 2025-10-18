import "./App.css";
import Sun from "./components/Sun";
import Quote from "./sections/Quote";

function App() {
  return (
    <div className='relative'>
      <Sun />
      <div className='bg-amber-200 md:mx-auto md:max-w-2/3'>
        <Quote />
        <Quote />
      </div>
    </div>
  );
}

export default App;
