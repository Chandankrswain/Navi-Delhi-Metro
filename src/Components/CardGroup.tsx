const CardGroup = () => {
  return (
    <div className="flex flex-wrap items-start w-[50%] justify-evenly ">
      <div className=" flex flex-col p-4 w-[40%] h-[191px] border-l p-2 border-[#7a7a7a] ">
        <p className="text-white text-8xl font-medium mb-1 tracking-wide">
          393
        </p>
        <p className="text-[#00FFFF] text-sm ml-1 font-['Share_Tech_Mono'] tracking-widest">
          TOTAL NETWORK LENGTH
        </p>
      </div>
      <div className="flex flex-col p-4 w-[40%] h-[191px] border-l p-2 border-[#7a7a7a]">
        <p className="text-white text-8xl font-medium mb-1 tracking-wide">
          12{" "}
        </p>
        <p className="text-[#00FFFF] text-sm ml-2 font-['Share_Tech_Mono'] tracking-widest">
          TOTAL NO OF LINES
        </p>
      </div>
      <div className="flex flex-col  p-4 w-[40%] h-[191px] border-l p-2 border-[#7a7a7a]">
        <p className="text-white text-8xl font-medium mb-1 tracking-wide ">
          288{" "}
        </p>
        <p className="text-[#00FFFF] text-sm ml-2 font-['Share_Tech_Mono'] tracking-widest">
          TOTAL NO OF STATIONS
        </p>
      </div>
      <div className="flex flex-col p-4 w-[40%] h-[191px] border-l p-2 border-[#7a7a7a]">
        <p className="text-white text-8xl font-medium mb-1 tracking-wide">
          2002
        </p>
        <p className="text-[#00FFFF] text-sm ml-2 font-['Share_Tech_Mono'] tracking-widest">
          YEAR FOUNDED
        </p>
      </div>
    </div>
  );
};

export default CardGroup;
