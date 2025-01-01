import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { StationRoutes } from "./pages/StationRoutes";
import StationInfo from "./pages/StationInfo";
import LineInfo from "./pages/LineInfo";
import TourGuide from "./pages/TourGuide";

import TravelAdvisory from "./pages/TravelAdvisory";
import Tickets from "./pages/Tickets";
import LastMileConnectivity from "./pages/LastMileConnectivity";
import CarbonLiteMetro from "./pages/CarbonLiteMetro";
import LostFound from "./pages/LostFound";
import Penalties from "./pages/Penalties";
import EmergencyEvacuation from "./pages/EmergencyEvacuation";
import ListofLostandFoundItems from "./pages/ListofLostandFoundItems";

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
          <Route path="/lostAndFound" element={<LostFound />} />
          <Route path="/travelAdvisory" element={<TravelAdvisory />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route
            path="/lastMileConnectivity"
            element={<LastMileConnectivity />}
          />
          <Route path="/carbonLiteMetro" element={<CarbonLiteMetro />} />
          <Route path="/penalties" element={<Penalties />} />
          <Route
            path="/emergencyevacutaion"
            element={<EmergencyEvacuation />}
          />
          <Route
            path="/listoflostfounditems"
            element={<ListofLostandFoundItems />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
