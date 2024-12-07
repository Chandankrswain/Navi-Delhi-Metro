interface CardData {
  kind?: string;
  "icon-class"?: string;
  detail_list?: Record<string, any>[];
}

interface Props {
  serviceData?: CardData[];
}

const StationServiceCard = ({ serviceData }: Props) => {
  const data = serviceData || [];

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-bold mb-4">Station Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg ">
            <div className="flex items-center mb-2">
              <i className={`${item["icon-class"]} text-yellow-400 text-2xl`} />
              <h3 className="ml-2 text-lg font-semibold">
                {item.kind || "Service"}
              </h3>
            </div>
            <ul className="text-sm text-gray-300">
              {(item?.detail_list || []).map((detail, idx) => (
                <li key={idx} className="mb-1">
                  <p>
                    <strong>Name:</strong> {detail?.facility_name || "N/A"}
                  </p>
                  <p>
                    <strong>Purpose:</strong> {detail?.purpose || "N/A"}
                  </p>
                  <p>
                    <strong>Location:</strong>{" "}
                    {detail?.location_description || "N/A"}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationServiceCard;
