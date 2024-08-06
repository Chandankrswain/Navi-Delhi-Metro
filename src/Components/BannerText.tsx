import { CiGlobe } from "react-icons/ci";
const BannerText = () => {
  return (
    <div className="z-10 flex-col justify-center items-center justify-evenly">
      <div>
        <h1 className="text-[50px] font-bold text-white ml-2">
          Unlimited travel with
        </h1>
        <p className="text-[150px] leading-none font-bold text-white">Delhi</p>
        <p className="text-[150px] leading-none font-bold text-white">Metro</p>
      </div>
      <div className="flex bg-transparent border-2 text-white pt-2 pl-4 pr-4 pb-2 rounded-3xl text-lg mt-2 ml-2 font-bold w-[250px] justify-evenly justify-center items-center  ">
        <CiGlobe className="w-6 h-6" />
        <button className="">Select your language</button>
      </div>
    </div>
  );
};

export default BannerText;
