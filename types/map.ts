import type { Coordinates } from "./churches";

export type NaverMap = naver.maps.Map;

export type Marker = {
  map: NaverMap;
  coordinates: Coordinates;
  icon: ImageIcon;
  onClick?: () => void;
};

export type ImageIcon = {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  scaledSize?: naver.maps.Size;
};

// export type ImageIcon = {
//   url: string;
//   size: naver.maps.Size;
//   origin: naver.maps.Point;
//   anchor: naver.maps.Point;
// };
