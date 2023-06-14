import { Autocomplete } from "@react-google-maps/api";
import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface PropType {
  onSearch: ({}: { lat: number; lng: number }) => unknown;
}
export default function SearchBox({ onSearch }: PropType) {
  const [searchValue, setSearchValue] = useState<string>("");
  const autocomplete = useRef<any>();
  const handlePlaceChange = () => {
    const selectedLocation = autocomplete.current.getPlace().geometry.location;
    onSearch({ lat: selectedLocation.lat(), lng: selectedLocation.lng() });
  };

  return (
    <Autocomplete
      onLoad={(event) => (autocomplete.current = event)}
      onPlaceChanged={handlePlaceChange}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: "absolute",
          left: "50%",
          marginLeft: "-120px",
        }}
      />
    </Autocomplete>
  );
}
