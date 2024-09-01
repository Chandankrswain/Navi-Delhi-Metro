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
      <div className="flex w-full justify-center items-center mb-16">
        <div className="sm:flex sm:w-9/12">
          <KnowYourStation />
          <CardGroup />
        </div>
      </div>
      <p className="text-white">hello</p>
    </>
  );
};

export default App;
