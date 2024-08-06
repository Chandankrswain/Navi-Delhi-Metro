import logo from "../images/logo.png";
import delhimetro from "../images/delhi-metro.png";
import facebook from "../images/facebook-logo.png";
import twitter from "../images/x-logo.jpg";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" w-full h-24 flex justify-between fixed z-10">
      {/* Left section of Navbar */}
      <div className="flex w-[200px] items-center m-[20px]">
        <img src={logo} className="w-18 h-16" />
        <img src={delhimetro} className="w-30 h-16" />
      </div>

      {/* Right section of Navbar */}
      <div className="flex w-[350px] items-center m-[20px] justify-center items-center justify-evenly">
        <div className="flex w-[80px] justify-between ">
          <img src={facebook} className="w-9 h-9" />
          <img src={twitter} className="w-9 h-9 rounded-3xl" />
        </div>
        <p className="text-white text-3xl">|</p>
        <div className="flex w-[120px]">
          <MdLanguage color="white" className="w-8 h-8" />
          <p className="text-white text-xl ml-2">English</p>
        </div>
        <button className="bg-white w-28 h-9 text-black rounded-sm text-md font-semibold">
          Help
        </button>
      </div>
    </div>
  );
};

export default Navbar;
