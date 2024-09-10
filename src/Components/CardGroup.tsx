const CardGroup = ({ bannerData }: any) => {
  return (
    <div className="flex flex-wrap sm:items-start w-full sm:w-[50%] sm:justify-evenly">
      <div className="flex flex-col p-4 w-full sm:w-[40%] h-[120px] sm:h-[191px] border-t border-b sm:border-t-0 sm:border-b-0 sm:border-l p-2 border-[#7a7a7a] items-center sm:items-start">
        <p className="text-white text-6xl sm:text-8xl font-medium mb-1 tracking-wide">
          {bannerData.number}
        </p>
        <p className="text-[#00FFFF] text-sm ml-1 font-['Share_Tech_Mono'] tracking-widest">
          {bannerData.description}
        </p>
      </div>
      {/* <div className="flex flex-col p-4 w-full sm:w-[40%] h-[120px] sm:h-[191px] border-t border-b sm:border-t-0 sm:border-b-0 sm:border-l p-2 border-[#7a7a7a] items-center sm:items-start">
        <p className="text-white text-6xl sm:text-8xl font-medium mb-1 tracking-wide">
          12
        </p>
        <p className="text-[#00FFFF] text-sm ml-2 font-['Share_Tech_Mono'] tracking-widest">
          TOTAL NO OF LINES
        </p>
      </div>
      <div className="flex flex-col p-4 w-full sm:w-[40%] h-[120px] sm:h-[191px] border-t border-b sm:border-t-0 sm:border-b-0 sm:border-l p-2 border-[#7a7a7a] items-center sm:items-start">
        <p className="text-white text-6xl sm:text-8xl font-medium mb-1 tracking-wide">
          288
        </p>
        <p className="text-[#00FFFF] text-sm ml-2 font-['Share_Tech_Mono'] tracking-widest">
          TOTAL NO OF STATIONS
        </p>
      </div>
      <div className="flex flex-col p-4 w-full sm:w-[40%] h-[120px] sm:h-[191px] border-t border-b sm:border-t-0 sm:border-b-0 sm:border-l p-2 border-[#7a7a7a] items-center sm:items-start">
        <p className="text-white text-6xl sm:text-8xl font-medium mb-1 tracking-wide">
          2002
        </p>
        <p className="text-[#00FFFF] text-sm ml-2 font-['Share_Tech_Mono'] tracking-widest">
          YEAR FOUNDED
        </p>
      </div> */}
    </div>
  );
};

export default CardGroup;
