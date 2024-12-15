interface LineBannerType {
  line_color?: string;
  status?: string;
  name?: string;
  distance?: number;
  fare?: number;
  junction?: number;
  first_station?: { station_name?: string; station_code?: string };
  last_station?: { station_name?: string; station_code?: string };
}

interface Props {
  lineUpperData: LineBannerType[];
}

const LinePageBanner = ({ lineUpperData }: Props) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      {lineUpperData?.slice(0, 1).map((item, index) => (
        <div
          key={index}
          className="p-6 mb-6 border rounded-lg  shadow-md"
          style={{
            borderColor: item.line_color || "#ccc",
            borderWidth: "3px",
          }}
        >
          <div className="flex text-white justify-between items-center mb-4">
            <div
              className="text-3xl font-bold"
              style={{ color: item.line_color || "#000" }}
            >
              {item?.name || "Unnamed Line"} -{" "}
              <span className="text-xl">{item?.line_color || "Color"}</span>
            </div>
            <div className="text-lg text-green-400 px-4 py-2 rounded-full">
              {item?.status || "Status Unknown"}
            </div>
          </div>

          <div className="flex justify-between text-sm mb-6 text-white">
            <div>
              <span className="font-bold">Normal:</span> 29 |
              <span className="font-bold">No Service:</span> 0 |
              <span className="font-bold">Planned Maintenance:</span> 0
            </div>
            <div>
              <span className="font-bold">First Station:</span>{" "}
              {item.first_station?.station_name ?? "N/A"} |
              <span className="font-bold">Last Station:</span>{" "}
              {item.last_station?.station_name ?? "N/A"}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-white">
            <div className="text-base">
              <div className="mb-2">
                <strong>Distance:</strong> {item?.distance ?? "N/A"} km
              </div>
              <div className="mb-2">
                <strong>Fare:</strong> ₹{item?.fare ?? "N/A"}
              </div>
            </div>
            <div className="text-base">
              <div className="mb-2">
                <strong>Junctions:</strong> {item?.junction ?? "N/A"}
              </div>
              <div>
                <strong>Travel Time:</strong> {item?.fare ?? "N/A"} mins
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinePageBanner;
