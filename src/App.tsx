import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { StationRoutes } from "./pages/StationRoutes";
import StationInfo from "./pages/StationInfo";
import LineInfo from "./pages/LineInfo";
import TourGuide from "./pages/TourGuide";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/station-routes/:type/:from/:to"
            element={<StationRoutes />}
          />
          <Route path="/station-data/:stationCode" element={<StationInfo />} />
          <Route path="/line/:lineCode" element={<LineInfo />} />
          <Route path="/tourGuide" element={<TourGuide />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
