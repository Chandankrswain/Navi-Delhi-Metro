import logo from "../images/logo.png";
import delhimetro from "../images/delhi-metro.png";
import { HiArrowUpRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="w-screen h-[8rem] flex sm:flex-row justify-center items-center sticky sm:fixed ">
      <div className="flex justify-between w-full sm:w-9/12 max-h-[6rem] items-center p-4 sm:p-0">
        {/* Left section of Navbar */}
        <div className="flex sm:flex-row justify-between items-center max-w-full sm:max-w-[200px] items-center p-[10px]">
          <img src={logo} className="w-12 h-10 sm:w-14 sm:h-12" alt="Logo" />
          <img
            src={delhimetro}
            className="w-24 h-14 sm:w-28 sm:h-16  sm:mt-0"
            alt="Delhi Metro"
          />
        </div>

        {/* Right section of Navbar */}
        <div className="flex justify-between item-center sm:w-[215px]">
          <button className="invisible sm:visible w-32 sm:w-40 h-12 sm:h-14 text-white text-sm sm:text-md border font-['Share_Tech_Mono'] font-thin flex justify-center items-center">
            CONTACT
            <HiArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-4" />
          </button>
          <div className="flex sm:h-8 flex-col justify-center mt-3 pr-2 space-y-1.5">
            <span className="bg-white w-6 h-[2px]"></span>
            <span className="bg-white w-6 h-[2px]"></span>
            <span className="bg-white w-6 h-[2px]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
