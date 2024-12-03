interface EmergencyData {
  [key: string]: any; // Adjust as per your exact Emergency data structure
}

interface Props {
  Emergency?: EmergencyData;
}

const StationInfoPageCards = ({ Emergency }: Props) => {
  // Iterate over Emergency entries (e.g., "Hospital", "Police Station")
  return (
    <div className="text-white">
      <h1>Emergency Services</h1>
      {Emergency &&
        Object.entries(Emergency).map(([key, services], index) => (
          <div key={index}>
            <h2>{key}</h2>
            {Array.isArray(services) &&
              services.map((service, idx) => (
                <div key={idx}>
                  <p>Name: {service?.name || "N/A"}</p>
                  <p>
                    Distance from Metro: {service?.distance_from_metro || "N/A"}{" "}
                    km
                  </p>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default StationInfoPageCards;
