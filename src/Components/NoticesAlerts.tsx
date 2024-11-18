const NoticesAlerts = ({ noticeData }: any) => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-[18rem] sm:mb-[14rem]">
      <div className=" sm:w-9/12 h-[182px] p-9 sm:p-2">
        <p className=" text-white text-[1.5rem] sm:text-[2rem] font-medium mb-3  ">
          Notices and Alerts 
        </p>
        <div className="border-t border-[#7a7a7a] pt-4 pb-6">
          <div className="flex sm:flex-row flex-col justify-between items-start ">
            {noticeData.map((data: any, index: number) => {
              return (
                <div
                  key={index}
                  className=" flex flex-col justify-center mb-3 sm:w-[30%]"
                >
                  <p className="text-[#7a7a7a] font-['Share_Tech_Mono']">
                    {data.date}
                  </p>
                  <p className="text-[#c9c9c9] sm:text-md font-bold">
                    {data.news}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesAlerts;
