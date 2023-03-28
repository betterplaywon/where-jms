import React from "react";
import Map from "@/pages/components/home/Map";
const MapPart = () => {
  return (
    <>
      <Map
        onLoad={() => {
          console.log("load!");
        }}
      />
    </>
  );
};

export default MapPart;
