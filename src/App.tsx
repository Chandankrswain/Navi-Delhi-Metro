import Banner from "./Components/Banner";
import CardGroup from "./Components/CardGroup";
import Disclaimer from "./Components/Disclaimer";
import Footer from "./Components/Footer";
import FooterSocial from "./Components/FooterSocial";
import KnowYourStation from "./Components/KnowYourStation";
import MetroCards from "./Components/MetroCards";
import Navbar from "./Components/Navbar";
import NoticesAlerts from "./Components/NoticesAlerts";
import ServicesCards from "./Components/ServicesCards";

const bannerTextData = {
  number: "393",
  description: "TOTAL NETWORK LENGTH  ",
};

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NoticesAlerts />
      <div className="flex w-full justify-center items-center mb-[14rem]">
        <div className="sm:flex sm:w-9/12">
          <KnowYourStation />
          <CardGroup />
        </div>
      </div>
      <div className="flex w-full justify-center items-center mb-[11rem]">
        <div className="flex flex-col sm:w-9/12 items-center justify-center">
          <p className="text-white text-[35px] sm:text-[96px] font-extrabold leading-none mb-20">
            OUR SERVICES.
          </p>
          <ServicesCards />
        </div>
      </div>
      <div className=" flex w-full  justify-center items-center mb-16">
        <div className="flex flex-col sm:w-9/12 items-center sm:items-start">
          <p className="text-white text-[14px] mb-3 font-['Share_Tech_Mono'] tracking-widest">
            TOTAL NUMBER OF
          </p>
          <p className="text-white text-[40px] sm:text-[96px] font-extrabold leading-none mb-20">
            METRO LINES.
          </p>
          <MetroCards />
        </div>
      </div>
      <Disclaimer />
      <Footer />
      <FooterSocial />
    </>
  );
};

export default App;
