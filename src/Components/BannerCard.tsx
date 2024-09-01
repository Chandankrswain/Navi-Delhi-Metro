import {
  HiArrowUpRight,
  HiOutlineArrowsUpDown,
  HiOutlineBolt,
  HiOutlineMap,
} from "react-icons/hi2";

const BannerCard = () => {
  return (
    <div>
      <div className="sm:w-[500px] text-white flex flex-col justify-evenly min-w-[342px] mt-3">
        <div className="flex items-center">
          <p className="text-3xl sm:text-5xl font-bold">Plan your journey</p>
        </div>

        <p className="mt-3 text-md">From</p>
        <div className="flex items-center justify-between">
          <input
            className="border border-white bg-transparent w-full h-[60px] border-1 p-4 text-lg mt-4 "
            placeholder="Enter the Departure Station"
          ></input>
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className="text-md">To</p>
          <HiOutlineArrowsUpDown className="w-6 h-6" />
        </div>
        <div className="flex items-center  justify-between">
          <input
            className="border border-white bg-transparent w-full h-[60px] rounded-0 border-1 p-4 text-lg mt-4 "
            placeholder="Enter the Arrival Station"
          ></input>
        </div>
        <p className="text-xl font-bold mt-4">Advanced Filter</p>
        <div className=" flex w-full h-[200px] mt-4 justify-between">
          <div className="flex flex-col w-full  justify-center justify-between items-start bg-[#2a2a2a] border-gray-500 p-4 ">
            <div className="flex justify-between items-center w-full">
              <HiOutlineBolt className="w-10  h-10" />
              <HiArrowUpRight className="ml-auto w-5 h-5 sm:w-6 sm:h-6 " />
            </div>
            <p className="text-md font-thin ">Shortest route</p>
          </div>
          <div className="flex flex-col w-full  justify-center justify-between bg-[#424242] items-start  p-4">
            <div className="flex justify-between items-center w-full">
              <HiOutlineMap className="w-10  h-10" />
              <HiArrowUpRight className="ml-auto w-5 h-5 sm:w-6 sm:h-6 " />
            </div>
            <p className="text-md font-thin">Minimum interchange</p>
          </div>
        </div>
      </div>
      <button className="mt-5 w-1/2 sm:w-full h-16 sm:h-16 text-white text-mds sm:text-md border font-['Share_Tech_Mono'] font-thin flex justify-center items-center">
        SHOW ROUTE AND FARE
        <HiArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-4 mr-2 " />
      </button>
    </div>
  );
};

export default BannerCard;
