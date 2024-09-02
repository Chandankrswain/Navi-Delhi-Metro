import Banner from "./Components/Banner";
import CardGroup from "./Components/CardGroup";
import KnowYourStation from "./Components/KnowYourStation";
import Navbar from "./Components/Navbar";
import NoticesAlerts from "./Components/NoticesAlerts";
import ServicesCards from "./Components/ServicesCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NoticesAlerts />
      <div className="flex w-full justify-center items-center mb-[10rem]">
        <div className="sm:flex sm:w-9/12">
          <KnowYourStation />
          <CardGroup />
        </div>
      </div>
      <div className="flex w-full justify-center items-center mb-16">
        <div className="flex flex-col sm:w-9/12 items-center justify-center">
          <p className="text-white text-[35px] sm:text-[96px] font-extrabold leading-none mb-20">
            OUR SERVICES.
          </p>
          <ServicesCards />
        </div>
      </div>
    </>
  );
};

export default App;
