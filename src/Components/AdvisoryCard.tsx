import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface Props {
  advisoryData: {
    do: string[];
    donts: string[];
  };
}

const AdvisoryCard = ({ advisoryData }: Props) => {
  const [showDoList, setShowDoList] = useState(true);
  const [showDontList, setShowDontList] = useState(true);

  const doList = advisoryData?.do;
  const dontList = advisoryData?.donts;

  return (
    <div className=" p-6 shadow-lg mx-auto">
      <h1 className="text-4xl text-white mb-6 text-center">Travel Advisory</h1>
      <div className="text-white flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl mb-4 flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" /> Do's
          </h2>
          {showDoList && (
            <ul className="list-disc list-inside space-y-2">
              {doList.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl mb-4 flex items-center">
            <FaTimesCircle className="text-red-500 mr-2" /> Don'ts
          </h2>
          {showDontList && (
            <ul className="list-disc list-inside space-y-2">
              {dontList.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <FaTimesCircle className="text-red-500 mr-2 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <p className="border border-gray-500 p-2">
          <button className="text-white px-4 py-2 rounded w-full">
            Items Prohibited on Metro Systems
          </button>
        </p>
        <p className="border border-gray-500 p-2">
          <button className=" text-white px-4 py-2 rounded w-full">
            Penalties
          </button>
        </p>
        <p className="border border-gray-500 p-2">
          <button className=" text-white px-4 py-2 rounded w-full">
            Emergency Evacuation Guidelines
          </button>
        </p>
      </div>
    </div>
  );
};

export default AdvisoryCard;
