import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { StationRoutes } from "./pages/StationRoutes";
import StationInfo from "./pages/StationInfo";
import LineInfo from "./pages/LineInfo";
import TourGuide from "./pages/TourGuide";
import MetroMuseum from "./pages/MetroMuseum";
import TravelAdvisory from "./pages/TravelAdvisory";
import Tickets from "./pages/Tickets";
import LastMileConnectivity from "./pages/LastMileConnectivity";
import CarbonLiteMetro from "./pages/CarbonLiteMetro";
import LostFound from "./pages/LostFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/station-routes/:type/:from/:to"
            element={<StationRoutes />}
          />
          <Route path="/station-data/:stationCode" element={<StationInfo />} />
          <Route path="/line/:lineCode" element={<LineInfo />} />
          <Route path="/tourGuide" element={<TourGuide />} />
          <Route path="/metroMuseum" element={<MetroMuseum />} />
          <Route path="/lostAndFound" element={<LostFound />} />
          <Route path="/travelAdvisory" element={<TravelAdvisory />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route
            path="/lastMileConnectivity"
            element={<LastMileConnectivity />}
          />
          <Route path="/carbonLiteMetro" element={<CarbonLiteMetro />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
