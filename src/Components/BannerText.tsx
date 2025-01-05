import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const BannerText = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-transparent flex-col justify-center items-center justify-evenly max-w-full m-3 mb-9">
      <div>
        <h1 className="text-[50px] font-bold text-white leading-none sm:ml-2">
          Unlimited travel with
        </h1>
        <p className="text-[3rem] sm:text-[9rem] leading-none font-bold text-white">
          Delhi
        </p>
        <p className="text-[3rem] sm:text-[9rem] leading-none font-bold text-white mb-3">
          Metro
        </p>
      </div>
      <div className="flex bg-transparent border  sm:w-[15rem] sm:h-[4rem] text-white mt-3 sm:mt-5 sm:ml-2 p-2 font-bold w-[250px] justify-evenly justify-center items-center  ">
        <HiOutlineGlobeAlt className="w-6 h-6" />
        <a
          target="_blank"
          href="https://delhimetrorail.com/static/media/DMRC-Network-Map-December-2024-Bilingual.52adb9ae.pdf"
          className="font-['Share_Tech_Mono'] text-md font-thin "
        >
          DOWNLOAD METRO MAP
        </a>
      </div>
    </div>
  );
};

export default BannerText;
