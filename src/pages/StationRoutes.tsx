import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StationData } from "../utils/api";
import { FILTER } from "../services/constants";
import RoutesMainCard from "../Components/RoutesMainCard";

const routeConfig = {
  [FILTER.MINIMUM_INTERCHANGE]: "minimum-interchange",
  [FILTER.SHORTEST_ROUTE]: "least-distance",
};

export const StationRoutes = () => {
  const { type, from, to } = useParams();

  const stationService = new StationData();
  const [routes, setRoutes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let result;

      if (type === routeConfig[FILTER.MINIMUM_INTERCHANGE]) {
        result = await stationService.minimumInterchange(
          from as string,
          to as string
        );
      } else {
        result = await stationService.leastDistance(
          from as string,
          to as string
        );
      }

      setRoutes(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-white">loading</div>
      ) : (
        <RoutesMainCard data={routes} />
      )}
    </>
  );
};
