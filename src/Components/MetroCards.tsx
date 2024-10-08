import { HiArrowUpRight } from "react-icons/hi2";

const MetroCards = ({ cardData }: any) => {
  cardData.map((data: any, index: any) => {
    return (
      <div key={index} className="flex flex-wrap justify-evenly">
        {" "}
        <div
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
          }}
          className="flex flex-col justify-between w-[300px] h-[500px] border border-[#7a7a7a] bg-contain bg-no-repeat p-7 mb-10"
        >
          <p className="text-[#7a7a7a] font-['Share_Tech_Mono'] tracking-widest">
            NORMAL SERVICE
          </p>
          <div className="flex flex-col">
            <div className="flex mb-7 items-end">
              <p className="text-[#00FFFF] font-['Share_Tech_Mono'] text-[14px] tracking-widest mr-3">
                {data.line}
              </p>
              <HiArrowUpRight className="w-7 h-7 text-white" />
            </div>
            <p className="text-white text-[20px] font-semibold">
              {data.colour}
            </p>
          </div>
        </div>
      </div>
    );
  });
};

export default MetroCards;
