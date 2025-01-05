import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { ContactData } from "../utils/api";

interface DataType {
  title: string;
  content: string;
}

const Contact = () => {
  const [contactData, setContactData] = useState<DataType[]>([]);

  const fetchContactData = async () => {
    const contactData = new ContactData();
    const response = await contactData.getContactData();
    setContactData(response);
    console.log(response);
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 px-4">
        <div className=" mx-auto  rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Contact Us
          </h1>
          {contactData?.map((item: DataType, index: number) => (
            <div
              key={index}
              className="mb-8 p-6 shadow-md border border-gray-600 flex flex-col justify-center w-[50%]"
            >
              <div
                className="text-2xl font-semibold text-white mb-4"
                dangerouslySetInnerHTML={{ __html: item?.title }}
              ></div>

              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item?.content }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
