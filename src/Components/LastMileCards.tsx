import { useState } from "react";
import { LastMileData } from "../utils/api";
import ServiceAvailabilityAndFareCard from "./ServiceAvailabilityAndFareCard";

interface Service {
  title: string;
  slug?: string;
  slug2?: string;
  links: { text1: string; text2: string }[];
}

interface ServiceData {
  title: string;
  content: string;
  page_slug: string;
}

interface Props {
  lastMileData: { services: Service[] };
}

const LastMileCards = ({ lastMileData }: Props) => {
  const [serviceAvailabilityData, setServiceAvailabilityData] = useState<
    ServiceData[] | null
  >(null);
  const [fareTimingData, setFareTimingData] = useState<ServiceData[] | null>(
    null
  );
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const fetchLastMileData = async (slug: string) => {
    const getLastMileData = new LastMileData();
    const lastMileResult = await getLastMileData.getLastSerMile(slug);
    return lastMileResult;
  };

  const handleServiceClick = async (slug: string) => {
    if (selectedService === slug) {
      setSelectedService(null);
      setServiceAvailabilityData(null);
    } else {
      setSelectedService(slug);
      const data = await fetchLastMileData(slug);
      setServiceAvailabilityData(data);
    }
  };

  const handleFareTimingClick = async (slug: string) => {
    if (selectedService === slug) {
      setSelectedService(null);
      setFareTimingData(null);
    } else {
      setSelectedService(slug);
      const data = await fetchLastMileData(slug);
      setFareTimingData(data);
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
                    className="cursor-pointer hover:text-blue-200 "
                    onClick={() => handleServiceClick(service.slug || "")}
                  >
                    {link.text1}
                  </button>
                  <button
                    onClick={() => handleFareTimingClick(service.slug2 || "")}
                    className="cursor-pointer hover:text-blue-200"
                  >
                    {link.text2}
                  </button>
                </li>
              ))}
            </ol>

            {selectedService === service.slug && serviceAvailabilityData && (
              <ServiceAvailabilityAndFareCard data={serviceAvailabilityData} />
            )}
            {selectedService === service.slug2 && fareTimingData && (
              <ServiceAvailabilityAndFareCard data={fareTimingData} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastMileCards;
