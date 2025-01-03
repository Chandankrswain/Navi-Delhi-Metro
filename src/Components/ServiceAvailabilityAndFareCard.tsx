interface DataType {
  title: string;
  content: string;
  page_slug: string;
}

interface Props {
  data: DataType[];
}

const ServiceAvailabilityCard = ({ data }: Props) => {
  return (
    <div>
      <div className="mt-4 p-4  shadow text-white bg-gray-700">
        <h2 className="text-lg font-bold mb-2">Service Details:</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data[0]?.content || "No content available",
          }}
        />
      </div>
    </div>
  );
};

export default ServiceAvailabilityCard;
