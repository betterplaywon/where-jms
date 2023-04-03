import React from "react";
import Map from "@/pages/components/home/Map";
import type { NaverMap } from "@/types/map";
import useMap from "@/hooks/useMap";
import Markers from "./Markers";
import useCurrentChurch from "@/hooks/useCurrentChurch";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { INITIAL_CENTER, INITIAL_ZOOM } from "@/hooks/useMap";
import { Coordinates } from "@/types/churches";

const MapPart = () => {
  const { initializeMap } = useMap();
  const { clearCurrentChurch } = useCurrentChurch();
  // 제 3자가 특정 좌표 url을 들고왔을 때 바로 해당 좌표를 보여주기 위해 우선 router를 import
  const router = useRouter();

  // 해당 query를 풀기위해 URLSearchParams를 사용했고, 쿼리값만을 떼내기 위한 router.asPath 사용했다. 추가적으로 뒤에 붙는 쿼리인 ?를 처리하기 위해 slice를 사용했다.
  // 매번 새로운 new URLSearchParams로 객체를 생성하기에 useMemo로 리소스 낭비를 막아줘야함.
  const searchParams = useMemo(
    () => new URLSearchParams(router.asPath.slice(1)),
    []
  );

  // 만약 초기 좌표값과 zoom값이 있다면 URLSearchParams의 메서드인 get으로 가져오고, 없다면 initialZoom으로 처리
  const initialZoom = useMemo(
    () =>
      searchParams.get("zoom")
        ? Number(searchParams.get("zoom"))
        : INITIAL_ZOOM,
    [searchParams]
  );

  const initialCenter = useMemo<Coordinates>(
    () =>
      searchParams.get("lat") && searchParams.get("lng")
        ? [Number(searchParams.get("lat")), Number(searchParams.get("lng"))]
        : INITIAL_CENTER,
    [searchParams]
  );

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, "click", clearCurrentChurch);
  };

  return (
    <>
      <Map
        onLoad={onLoadMap}
        initialZoom={initialZoom}
        initialCenter={initialCenter}
      />
      <Markers />
    </>
  );
};

export default MapPart;
