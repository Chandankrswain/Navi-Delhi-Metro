interface CardData {
  platform_name?: string;
  train_towards?: {
    id: number;
    station_name: string;
    station_code: string;
  };
  train_towards_second?: {
    id: number;
    station_name: string;
    station_code: string;
  };
}

interface Props {
  data: CardData; // Now receives individual platform data
}

const PlatformCard = ({ data }: Props) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-white">
      <h3 className="text-lg font-bold text-yellow-400 mb-2">
        {data.platform_name || "Unknown Platform"}
      </h3>
      <p>
        <strong>Train Towards:</strong>
        {data.train_towards ? `${data.train_towards.station_name} )` : "N/A"}
      </p>
      <p>
        <strong>Second Train Towards:</strong>{" "}
        {data.train_towards_second
          ? `${data.train_towards_second.station_name} `
          : "N/A"}
      </p>
    </div>
  );
};

export default PlatformCard;
