import { useState } from "react";
import LineStationCard from "./LineStationCard";

interface ListType {
  station_name?: string;
  station_code?: string;
  status?: string;
}

interface Props {
  stationListData?: ListType[];
}

const LineStationAccordion = ({ stationListData }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedStationCode, setSelectedStationCode] = useState<string | null>(
    null
  );

  const toggleAccordion = (index: number, stationCode: string | undefined) => {
    setActiveIndex(activeIndex === index ? null : index);
    setSelectedStationCode(activeIndex === index ? null : stationCode || null);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
        Station Status
      </h2>
      <div className="space-y-4">
        {stationListData
          ?.slice(0, stationListData.length - 1)
          .map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index, item.station_code)}
                className="w-full flex justify-between items-center px-5 py-4 bg-gray-600 text-white text-lg font-medium hover:bg-gray-500 transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-semibold">
                    {item?.station_name || "Unknown Station"}
                  </span>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      item?.status === "Station Open"
                        ? "bg-green-700 text-white"
                        : "bg-red-400 text-white"
                    }`}
                  >
                    {item?.status || "Unknown"}
                  </span>
                </div>
                <span>
                  {activeIndex === index ? (
                    <span className="text-teal-400">▲</span>
                  ) : (
                    <span className="text-teal-400">▼</span>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-5 py-3 bg-gray-800 text-sm text-gray-300">
                  <LineStationCard stationCode={selectedStationCode} />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LineStationAccordion;
