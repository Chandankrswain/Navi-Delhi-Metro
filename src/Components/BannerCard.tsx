import {
  HiArrowUpRight,
  HiOutlineArrowsUpDown,
  HiOutlineBolt,
  HiOutlineMap,
  HiOutlineMapPin,
} from "react-icons/hi2";

const BannerCard = () => {
  return (
    <div>
      <div className="border w-[450px] text-white p-4 flex flex-col justify-evenly">
        <div className="flex items-center">
          <HiOutlineMapPin className="w-8 h-7" />
          <p className="ml-1 text-xl font-bold">Plan your journey</p>
        </div>

        <p className="mt-3 text-md">From</p>
        <div className="flex items-center justify-between">
          <input className="border border-white bg-transparent w-full h-[60px] border-1 p-4 text-lg mt-4 border-red-900"></input>
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className="text-md">To</p>
          <HiOutlineArrowsUpDown className="w-6 h-6" />
        </div>
        <div className="flex items-center  justify-between">
          <input className="border border-white bg-transparent w-full h-[60px] rounded-0 border-1 p-4 text-lg mt-4 border-red-900"></input>
        </div>
        <p className="text-xl font-bold mt-4">Advanced Filter</p>
        <div className=" flex w-full h-[200px] mt-4 justify-between">
          <div className="flex flex-col w-full  justify-center justify-between items-start border-r border-gray-500 p-4 ">
            <HiArrowUpRight className="ml-auto w-5 h-5 sm:w-6 sm:h-6 " />
            <HiOutlineBolt className="w-20  h-20" />
            <p className="text-md font-thin ">Shortest route</p>
          </div>
          <div className="flex flex-col w-full  justify-center justify-between items-start  p-4">
            <HiArrowUpRight className="ml-auto w-5 h-5 sm:w-6 sm:h-6 " />
            <HiOutlineMap className="w-20  h-20" />
            <p className="text-md font-thin">Minimum interchange</p>
          </div>
        </div>
      </div>
      <button className=" w-32 sm:w-full h-12 sm:h-14 text-white text-mds sm:text-md border font-['Share_Tech_Mono'] font-thin flex justify-center items-center">
        SHOW ROUTE AND FARE
        <HiArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-4" />
      </button>
    </div>
  );
};

export default BannerCard;
