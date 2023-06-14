"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { ReactElement, memo } from "react";
const center = { lat: -37.94247, lng: 145.16347 };
const containerStyle = {
  width: "100%",
  height: "100%",
};
interface Props {
  children: ReactElement[];
  onLoad?: (map: google.maps.Map) => void;
}
const Map = ({ children, onLoad }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
    libraries: ["places"],
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      mapContainerClassName="absolute"
      onLoad={(map) => onLoad(map)}
    >
      {children}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default memo(Map);
