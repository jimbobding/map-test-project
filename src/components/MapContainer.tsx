import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import Map from "./Map";

const REACT_APP_GOOGLE_API_KEY = "AIzaSyD6QC4OrFyQzJgFSf9yZEmop5ADJgW8Ji8";

const MapContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;
  return <Map weight={""} dropdown={""} name={""} />;
};

export default MapContainer;
