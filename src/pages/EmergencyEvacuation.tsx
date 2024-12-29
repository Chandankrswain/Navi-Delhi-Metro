import { useEffect, useState } from "react";
import { EmergencyEvacuationData } from "../utils/api";

interface DataType {
  title: string;
  content: string;
}

const EmergencyEvacuation = () => {
  const [emergencyEvacuationData, setEmergencyEvacutationData] = useState<
    DataType[]
  >([]);

  const fetchData = async () => {
    const getEmergencyEvacuationData = new EmergencyEvacuationData();
    const evacutaionResult =
      await getEmergencyEvacuationData.getEmergencyEvacution();
    setEmergencyEvacutationData(evacutaionResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" min-h-screen p-6">
      <div className="space-y-6">
        {emergencyEvacuationData.map((item, index) => (
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

export default EmergencyEvacuation;
