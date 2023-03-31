import { useCallback } from "react";
import { mutate } from "swr";
import type { Churches } from "../types/churches";

export const CURRENT_CHURCH_KEY = "/current-church"; //이런 문자열을 key로 하는 공간에

const useCurrentChurch = () => {
  const setCurrentChurch = useCallback((church: Churches) => {
    // 새로운 교회 데이터를 인자로 받아 그 데이터를 CURRENT_CHURCH_KEY라는 공간에 현재 선택된 church를 전역 상태로 저장한다
    mutate(CURRENT_CHURCH_KEY, church);
  }, []);

  const clearCurrentChurch = useCallback(() => {
    mutate(CURRENT_CHURCH_KEY, null);
  }, []);

  return {
    setCurrentChurch,
    clearCurrentChurch,
  };
};
export default useCurrentChurch;
