// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

// import Map from "./Map";

// interface MapContainerProps {
//   weight: string;
//   dropdown: string;
//   name: string;
// }

// const REACT_APP_GOOGLE_API_KEY = "AIzaSyD6QC4OrFyQzJgFSf9yZEmop5ADJgW8Ji8";

// const MapContainer = ({ weight, dropdown, name }: MapContainerProps) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: REACT_APP_GOOGLE_API_KEY,
//     libraries: ["places"],
//   });

//   if (!isLoaded) return <div>Loading....</div>;
//   return <Map weight={weight} dropdown={dropdown} name={name} />;
// };

// export default MapContainer;

import { useLoadScript } from "@react-google-maps/api";

import Map from "./Map";

const REACT_APP_GOOGLE_API_KEY = "AIzaSyD6QC4OrFyQzJgFSf9yZEmop5ADJgW8Ji8";

const MapContainer = ({ weight, dropdown, name }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;
  return <Map weight={weight} dropdown={dropdown} name={name} />;
};

export default MapContainer;
