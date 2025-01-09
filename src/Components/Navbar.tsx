import { useState } from "react";
import logo from "/images/logo.png";
import delhimetro from "/images/delhi-metro.png";
import { HiArrowUpRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const NavigateHome = () => {
    navigate("/");
  };

  const NavigateContact = () => {
    navigate("/contact");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-screen h-[8rem] flex sm:flex-row justify-center items-center">
      <div className="flex justify-between w-full sm:w-9/12 max-h-[6rem] items-center p-4 sm:p-0">
        {/* Left section of Navbar */}
        <div className="flex sm:flex-row justify-between items-center max-w-full sm:max-w-[200px] items-center p-[10px]">
          <img src={logo} className="w-12 h-10 sm:w-14 sm:h-12" alt="Logo" />
          <img
            onClick={NavigateHome}
            src={delhimetro}
            className="w-24 h-14 sm:w-28 sm:h-16 sm:mt-0 cursor-pointer"
            alt="Delhi Metro"
          />
        </div>

        {/* Right section of Navbar */}
        <div className="flex justify-between items-center sm:w-[215px]">
          <button
            onClick={NavigateContact}
            className="invisible sm:visible w-32 sm:w-40 h-12 sm:h-14 text-white text-sm sm:text-md border font-['Share_Tech_Mono'] font-thin flex justify-center items-center"
          >
            CONTACT
            <HiArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-4" />
          </button>

          {/* Hamburger Menu */}
          <div
            className="flex sm:hidden flex-col justify-center mt-3 pr-2 space-y-1.5 cursor-pointer"
            onClick={toggleSidebar}
          >
            <span className="bg-white w-6 h-[2px]"></span>
            <span className="bg-white w-6 h-[2px]"></span>
            <span className="bg-white w-6 h-[2px]"></span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white text-xl" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <ul className="mt-8 space-y-6 text-lg">
          <li
            onClick={() => {
              toggleSidebar();
              NavigateHome();
            }}
            className="cursor-pointer px-4 py-2 hover:bg-gray-700"
          >
            Home
          </li>
          <li
            onClick={() => {
              toggleSidebar();
              NavigateContact();
            }}
            className="cursor-pointer px-4 py-2 hover:bg-gray-700"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
