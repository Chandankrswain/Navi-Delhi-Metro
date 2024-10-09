import { HiArrowUpRight } from "react-icons/hi2";

const ServicesCards = ({ servicesData }: any) => {
  return (
    <div className="flex flex-wrap justify-between">
      {servicesData.map((data: any, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col w-screen sm:w-[320px] h-[338px] justify-between  border-t border-b border-[#7a7a7a] pl-8 pr-8 sm:pl-0 sm:pr-0 pt-5 pb-5"
          >
            <HiArrowUpRight className="text-white w-8 h-7 ml-auto " />
            <div className="flex justify-between">
              <img className="w-14 h-14" src={data.image} alt="" />
              {(data.id === 0 || data.id === 7) && (
                <button className="text-white text-[11px] bg-black w-11 h-6 mr-4">
                  {data.id === 0 ? "NOTE" : "NEW"}
                </button>
              )}
            </div>
            <p className="text-white text-[20px] font-medium ">{data.title}</p>
            <p className="text-[15px] text-[#c4c4c4] h-[75px] font-light">
              {data.description}
            </p>
            <p className="text-[#00ffff] text-[14px] font-['Share_Tech_Mono'] tracking-widest">
              {data.link}
              <></>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCards;
