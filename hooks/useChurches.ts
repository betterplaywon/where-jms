import { useCallback } from "react";
import { Churches } from "../types/churches";
import { mutate } from "swr";

export const CHURCHES_KEY = "/churches"; //이런 문자열을 key로 하는 공간에

const useChurches = () => {
  // 새로운 교회 데이터를 인자로 받아 그 데이터를 전역 상태로 저장한다
  const initializeChurches = useCallback((churches: Churches[]) => {
    // mutate는 swr의 함수이고 위의 CHURCHES_KEY와 같은 문자열을 key로 하는 공간에 교회 데이터를 전역으로 저장해두겠다는 뜻
    mutate(CHURCHES_KEY, churches);
  }, []);

  return {
    initializeChurches,
  };
};
export default useChurches;
