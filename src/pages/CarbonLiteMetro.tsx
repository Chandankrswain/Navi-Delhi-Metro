import { useEffect, useState } from "react";
import { CarbonLiteData } from "../utils/api";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../utils/disclaimer.css";
interface CarbonLiteMetroType {
  title: string;
  content: string;
}

const CarbonLiteMetro = () => {
  const [carbonLiteMetroData, setCarbonLiteMetroData] = useState<
    CarbonLiteMetroType[]
  >([]);

  const fetchCarbonLiteData = async () => {
    const carbonLiteData = new CarbonLiteData();
    const carbonResult = await carbonLiteData.getCarbonLiteMetro();
    setCarbonLiteMetroData(carbonResult);
  };

  useEffect(() => {
    fetchCarbonLiteData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-8">
          Carbon Lite Metro Initiative
        </h1>
        <div className="flex flex-col items-center gap-8">
          {carbonLiteMetroData?.map((item, index) => (
            <div
              key={index}
              className="max-w-screen-xl w-full p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-green-400 mb-4 text-center">
                {item?.title || "Untitled"}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: item?.content || "<p>No content available</p>",
                }}
                className="text-gray-400 leading-relaxed text-justify disclaimer-content"
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarbonLiteMetro;
