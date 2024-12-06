interface StationLiftsData {
  lifts?: Record<string, any>[];
}

interface Props {
  stationLiftData?: StationLiftsData;
}

const StationLiftContainer = ({ stationLiftData }: Props) => {
  const lifts = stationLiftData?.lifts || [];

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-bold mb-4">Station Lifts</h2>
      <table className="w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-700 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-700 px-4 py-2 text-left">
              Description
            </th>
            <th className="border border-gray-700 px-4 py-2 text-left">
              Available Outside/Inside
            </th>
            <th className="border border-gray-700 px-4 py-2 text-left">
              Divyang Jan Friendly
            </th>
          </tr>
        </thead>
        <tbody>
          {lifts.map((item: any, index: number) => (
            <tr key={index} className="odd:bg-gray-800 even:bg-gray-700 ">
              <td className="border border-gray-700 px-4 py-2">
                {item?.name || "Not Available"}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                {item?.description_location || "Not Available"}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                {item?.available_outside_inside || "Not Available"}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                {item?.divyang_friendly ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StationLiftContainer;
