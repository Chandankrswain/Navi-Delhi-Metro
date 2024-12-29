import { useEffect, useState } from "react";
import { PenaltiesData } from "../utils/api";

interface DataType {
  title: string;
  content: string;
}

const Penalties = () => {
  const [penaltiesData, setPenaltiesData] = useState<DataType[]>([]);

  const fetchData = async () => {
    const getPenalties = new PenaltiesData();
    const penaltiesResult = await getPenalties.getPenalties();
    setPenaltiesData(penaltiesResult);
    console.log(penaltiesResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" min-h-screen p-6">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        Metro Penalties
      </h1>
      <div className="space-y-6">
        {penaltiesData.map((item, index) => (
          <div key={index} className=" p-6 text-white">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              {item.title}
            </h2>
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Penalties;
