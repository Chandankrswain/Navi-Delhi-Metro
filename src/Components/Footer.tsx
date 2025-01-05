import { useNavigate } from "react-router-dom";
import logo from "../../public/images/logo.png";
import delhimetro from "../../public/images/delhi-metro.png";
import { HiArrowUpRight, HiOutlinePhone } from "react-icons/hi2";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex w-full justify-center bg-black sm:h-[550px] ">
      <div className="flex flex-col sm:flex-row w-9/12 ">
        <div className="flex mt-[3rem] items-start sm:w-[30%]">
          <img src={logo} className="w-12 h-10 sm:w-36 sm:h-32" alt="Logo" />
          <img
            src={delhimetro}
            className="w-24 h-14 sm:w-52 sm:h-36 sm:mt-0"
            alt="Delhi Metro"
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-[70%] text-white sm:p-6 sm:ml-10 justify-between ">
          <div className="flex flex-col sm:w-[40%] h-full">
            <p className="text-3xl sm:text-4xl font-semibold mt-10 mb-9">
              QUICK LINKS
            </p>
            <ul className="mb-6">
              <li
                className="border-t border-[#747474] text-[#c9c9c9] text-sm pt-4 mb-2 cursor-pointer"
                onClick={() => handleNavigation("/miscellaneous")}
              >
                MISCELLANEOUS
              </li>
              <li
                className="mb-2 text-sm text-[#c9c9c9] cursor-pointer"
                onClick={() => handleNavigation("/emergency-evacuation-plan")}
              >
                EVACUATION GUIDELINES
              </li>
              <li
                className="mb-2 text-sm text-[#c9c9c9] cursor-pointer"
                onClick={() => handleNavigation("/faq")}
              >
                FAQ's
              </li>
              <li
                className="mb-2 text-sm text-[#c9c9c9] cursor-pointer"
                onClick={() => handleNavigation("/contact")}
              >
                HELP & CONTACT
              </li>
              <li
                className="mb-2 text-sm text-[#c9c9c9] cursor-pointer"
                onClick={() => handleNavigation("/disclaimer")}
              >
                DISCLAIMER
              </li>
              <li
                className="mb-2 text-sm text-[#c9c9c9] cursor-pointer"
                onClick={() => handleNavigation("/privacy-policy")}
              >
                PRIVACY POLICY
              </li>
            </ul>

            <button
              className="flex font-['Share_Tech_Mono'] text-md border p-4 w-full items-center justify-center mb-8"
              onClick={() => handleNavigation("/contact")}
            >
              HELP AND CONTACT
              <HiArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-4 " />
            </button>
          </div>

          <div className="flex flex-col justify-evenly sm:p-6 mb-7">
            <div>
              <p className="text-20 sm:text-[30px] font-extrabold">
                DMRC HELPLINE NO.
              </p>
              <div className="flex items-center justify-start">
                <HiOutlinePhone className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mt-1" />
                <p className="text-[30px] sm:text-[40px] font-bold">155370</p>
              </div>
              <p className="text-[#c9c9c9] text-[11px] sm:text-sm mb-5">
                * This call is chargeable as per calling party pay basis
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-20 sm:text-[30px] font-extrabold">
                CISF HELPLINE NO.
              </p>
              <div className="flex items-center justify-start">
                <HiOutlinePhone className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mt-1" />
                <p className="text-[30px] sm:text-[40px] font-bold">155655</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
