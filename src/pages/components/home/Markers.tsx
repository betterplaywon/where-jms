import React from "react";
import useSWR from "swr";
import { MAP_KEY } from "@/hooks/useMap";
import { CHURCHES_KEY } from "@/hooks/useChurches";
import useCurrentChurch, { CURRENT_CHURCH_KEY } from "@/hooks/useCurrentChurch";
import { NaverMap, ImageIcon } from "@/types/map";
import { Churches } from "@/types/churches";
import Marker from "./Marker";

const Markers = () => {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: churches } = useSWR<Churches[]>(CHURCHES_KEY);

  const { data: currentChurch } = useSWR<Churches>(CURRENT_CHURCH_KEY);
  const { setCurrentChurch, clearCurrentChurch } = useCurrentChurch();

  console.log(currentChurch);

  if (!map || !churches) return null;
  return (
    <>
      {churches.map(church => {
        return (
          <Marker
            map={map}
            coordinates={church.coordinates}
            icon={generateStoreMarkerIcon(church.iconNumber, false)}
            onClick={() => {
              setCurrentChurch(church);
            }}
            key={church.number}
          />
        );
      })}

      {currentChurch && (
        <Marker
          map={map}
          coordinates={currentChurch.coordinates}
          icon={generateStoreMarkerIcon(currentChurch.iconNumber, true)}
          onClick={clearCurrentChurch}
          key={currentChurch.number}
        />
      )}
    </>
  );
};
export default Markers;

const MARKER_HEIGHT = 42;
const MARKER_WIDTH = 42;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

export function generateStoreMarkerIcon(
  markerIndex: number,
  isSelected: boolean
): ImageIcon {
  return {
    url: isSelected ? "images/markers-selected.png" : "images/markers.png",
    size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
    origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
    scaledSize: new naver.maps.Size(
      SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
      SCALED_MARKER_HEIGHT
    ),
  };
}
