import React from "react";
import Map from "@/pages/components/home/Map";
import type { NaverMap } from "@/types/map";
import useMap from "@/hooks/useMap";
import Markers from "./Markers";
import useCurrentChurch from "@/hooks/useCurrentChurch";

const MapPart = () => {
  const { initializeMap } = useMap();
  const { clearCurrentChurch } = useCurrentChurch();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, "click", clearCurrentChurch);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapPart;
