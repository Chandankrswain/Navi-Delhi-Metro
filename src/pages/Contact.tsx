import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { ContactData } from "../utils/api";
import { useLocation } from "react-router-dom";

interface DataType {
  title: string;
  content: string;
}

const Contact = () => {
  const [contactData, setContactData] = useState<DataType[]>([]);

  const location = useLocation();
  const fetchContactData = async () => {
    const contactData = new ContactData();
    const response = await contactData.getContactData();
    setContactData(response);
    console.log(response);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    fetchContactData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 px-4 flex justify-center items-center">
        <div className="w-full max-w-4xl mx-auto  shadow-lg p-6">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Contact Us
          </h1>
          {contactData?.map((item: DataType, index: number) => (
            <div
              key={index}
              className="mb-8 p-6 shadow-md sm:border 0 flex flex-col justify-center items-center w-full leading-loose"
            >
              <div
                className="text-2xl font-semibold text-white mb-4 text-center"
                dangerouslySetInnerHTML={{ __html: item?.title }}
              ></div>

              <div
                className="text-gray-300 leading-relaxed text-center"
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
