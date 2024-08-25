import { HiOutlineGlobeAlt } from "react-icons/hi2";

const BannerText = () => {
  return (
    <div className="bg-transparent flex-col justify-center items-center justify-evenly">
      <div className="">
        <h1 className="text-[50px] font-bold text-white ml-2">
          Unlimited travel with
        </h1>
        <p className="text-[150px] leading-none font-bold text-white">Delhi</p>
        <p className="text-[150px] leading-none font-bold text-white">Metro</p>
        <p className="m-2 mb-3 text-md text-white ">
          Click here to plan through{" "}
          <a
            className="text-white hover:text-[#04d9ff]"
            href="https://www.google.com"
          >
            Interactive map{" "}
          </a>
        </p>
      </div>
      <div className="flex bg-transparent border  w-[15rem] h-[4rem] text-white mt-2 ml-2 p-2 font-bold w-[250px] justify-evenly justify-center items-center  ">
        <HiOutlineGlobeAlt className="w-6 h-6" />
        <button className="font-['Share_Tech_Mono'] text-md font-thin ">
          SELECT YOUR LANGUAGE
        </button>
      </div>
    </div>
  );
};

export default BannerText;
