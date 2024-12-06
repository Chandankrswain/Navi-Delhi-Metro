interface StationGatesData {
  gates?: Record<string, any>[];
}

interface Props {
  stationGateData?: StationGatesData;
}

const StationGateContainer = ({ stationGateData }: Props) => {
  const gates = stationGateData?.gates || [];

  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h2 className="text-lg font-bold text-white mb-4">Station Gates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gates?.map((items: any, index: number) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-semibold text-yellow-300">
                {items?.gate_name || "Unnamed Gate"}
              </p>
              <p
                className={`text-sm font-bold px-2 py-1 rounded ${
                  items?.status === "Open"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {items?.status || "Status Unknown"}
              </p>
            </div>
            <p className="text-sm text-gray-400">
              Location: {items?.location || "Location not available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationGateContainer;
