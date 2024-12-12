import { HiArrowUpRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

interface Props {
  lineData: Record<string, any>[];
  card?: Record<string, any>;
}

const MetroCards = ({ lineData, card }: Props) => {
  const navigate = useNavigate();

  const handleSubmit = (lineCode: string) => {
    navigate(`/line/${lineCode}`);
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {lineData.map((data: any, index: number) => {
        return (
          <div
            onClick={() => handleSubmit(data.line_code)}
            key={index}
            style={{
              backgroundImage: `url(${card[data.class_primary]})`,
            }}
            className="flex flex-col justify-between w-[300px] h-[500px] border border-[#7a7a7a] bg-contain bg-no-repeat p-7 mb-10"
          >
            <p className="text-[#7a7a7a] font-['Share_Tech_Mono'] tracking-widest">
              NORMAL SERVICE
            </p>
            <div className="flex flex-col">
              <div className="flex mb-7 items-end">
                <p className="text-[#00FFFF] font-['Share_Tech_Mono'] text-[14px] tracking-widest mr-3">
                  {data.line_code}
                </p>
                <HiArrowUpRight className="w-7 h-7 text-white" />
              </div>
              <p className="text-white text-[20px] font-semibold">
                {data.line_color}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetroCards;
