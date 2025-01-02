import LastMileCards from "../Components/LastMileCards";

const data = {
  services: [
    {
      title: "E-Rickshaw Services",
      slug: "e-rickshaw-service-availability",
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
    <div className=" text-white">
      <LastMileCards lastMileData={data} />
    </div>
  );
};

export default LastMileConnectivity;
