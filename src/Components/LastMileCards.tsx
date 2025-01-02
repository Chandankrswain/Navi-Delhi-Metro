import { useState } from "react";
import { LastMileData } from "../utils/api";

interface Service {
  title: string;
  slug?: string;
  links: { text1: string; text2: string }[];
}

interface ServiceData {
  page_id: number;
  title: string;
  content: string;
  page_slug: string;
  cover_photo: string | null;
  seo_title: string | null;
  search_description: string;
}

interface Props {
  lastMileData: { services: Service[] };
}

const LastMileCards = ({ lastMileData }: Props) => {
  const [serviceAvailabilityData, setServiceAvailabilityData] = useState<
    ServiceData[] | null
  >(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const FetchLastMileData = async (slug: string) => {
    const getLastMileData = new LastMileData();
    const lastMileResult = await getLastMileData.getLastSerMile(slug);
    setServiceAvailabilityData(lastMileResult);
  };

  const handleServiceClick = (slug: string) => {
    if (selectedService === slug) {
      setSelectedService(null);
      setServiceAvailabilityData(null);
    } else {
      setSelectedService(slug);
      FetchLastMileData(slug);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold text-center text-white mb-8">
        Last Mile Connectivity
      </h1>
      <div className="flex gap-4 flex-wrap justify-between">
        {lastMileData.services.map((service, index) => (
          <div
            key={index}
            className="shadow-md p-6 text-white border w-full hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4">{service.title}</h2>
            <ol className="space-y-2 text-gray-200">
              {service.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <button
                    className="cursor-pointer hover:text-blue-200"
                    onClick={() => handleServiceClick(service.slug || "")}
                  >
                    {link.text1}
                  </button>
                  <button className="cursor-pointer hover:text-blue-200">
                    {link.text2}
                  </button>
                </li>
              ))}
            </ol>

            {selectedService === service.slug && serviceAvailabilityData && (
              <div className="mt-4 p-4  shadow text-white bg-gray-700">
                <h2 className="text-lg font-bold mb-2">Service Details:</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      serviceAvailabilityData[0]?.content ||
                      "No content available",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastMileCards;
