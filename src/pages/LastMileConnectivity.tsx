import Footer from "../Components/Footer";
import LastMileCards from "../Components/LastMileCards";
import Navbar from "../Components/Navbar";

const data = {
  services: [
    {
      title: "E-Rickshaw Services",
      slug: "e-rickshaw-service-availability",
      slug2: "e-rickshaw-fare",
      links: [
        {
          text1: "Service Availability",
          text2: "",
        },
        {
          text1: "",
          text2: "Fare & Timings",
        },
      ],
    },
    {
      title: "Cycle Sharing Services",
      slug: "cycle-sharing-service-availability",
      slug2: "cycle-sharing-fare",
      links: [
        {
          text1: "Service Availability",
          text2: "",
        },
        {
          text1: "",
          text2: "Fare & Timings",
        },
      ],
    },
    {
      title: "E-Auto Services",
      slug: "auto-rickshaw-e-booth-service-availability",
      slug2: "auto-rickshaw-e-booth-fare",
      links: [
        {
          text1: "Service Availability",
          text2: "",
        },
        {
          text1: "",
          text2: "Fare & Timings",
        },
      ],
    },
    {
      title: "Electrical Vehicle Services",
      slug: "electrical-vehicle-public-charging-and-battery-swa",
      slug2: "electrical-vehicle-fare",
      links: [
        {
          text1: "Service Availability",
          text2: "",
        },
        {
          text1: "",
          text2: "Fare & Timings",
        },
      ],
    },
  ],
};

const LastMileConnectivity = () => {
  return (
    <>
      <Navbar />
      <div className=" text-white">
        <LastMileCards lastMileData={data} />
      </div>
      <Footer />
    </>
  );
};

export default LastMileConnectivity;
