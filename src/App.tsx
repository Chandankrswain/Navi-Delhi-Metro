import Banner from "./Components/Banner";
import CardGroup from "./Components/CardGroup";
import KnowYourStation from "./Components/KnowYourStation";
import Navbar from "./Components/Navbar";
import NoticesAlerts from "./Components/NoticesAlerts";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NoticesAlerts />
      <div className=" flex w-full h-[700px] justify-center ">
        <div className=" flex sm:w-9/12">
          <KnowYourStation />
          <CardGroup />
        </div>
      </div>
    </>
  );
};

export default App;
