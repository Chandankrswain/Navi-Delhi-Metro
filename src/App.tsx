import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { StationRoutes } from "./pages/StationRoutes";

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
        </Routes>
      </Router>
    </>
  );
};

export default App;
