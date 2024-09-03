const NoticesAlerts = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-[18rem] sm:mb-[14rem]">
      <div className=" sm:w-9/12 h-[182px] p-9 sm:p-2">
        <p className=" text-white text-[1.5rem] sm:text-[2rem] font-medium mb-3  ">
          Notices and Alerts
        </p>
        <div className="border-t border-[#7a7a7a] pt-4 pb-6">
          <div className="flex sm:flex-row flex-col justify-between items-start ">
            <div className=" flex flex-col justify-center mb-3 sm:w-[30%]">
              <p className="text-[#7a7a7a] font-['Share_Tech_Mono']">
                28-8-2024
              </p>
              <p className="text-[#c9c9c9] sm:text-md font-bold">
                DMRC launches special drive to prevent unlawful entry of male
                passengers in ladies coaches
              </p>
            </div>
            <div className="flex flex-col justify-center mb-3 sm:w-[30%] ">
              <p className="text-[#7a7a7a] font-['Share_Tech_Mono']">
                23-8-2024
              </p>
              <p className="text-[#c9c9c9] sm:text-md font-bold">
                Timing for commnecement of sunday services on Phase-III
                corridors revised
              </p>
            </div>
            <div className="flex flex-col  justify-center mb-3 sm:w-[30%]">
              <p className="text-[#7a7a7a] font-['Share_Tech_Mono']">
                21-8-2024
              </p>
              <p className="text-[#c9c9c9] sm:text-md font-bold">
                DMRC Completes Major Tunneling Milestone on Phase 4 Golden Line
                Breakthrough at Chhatarpur Mandir Station
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesAlerts;
