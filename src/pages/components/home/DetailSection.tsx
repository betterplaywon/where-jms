import styles from "../../../styles/detail.module.scss";
import { IoIosArrowUp } from "react-icons/io";
import useSWR from "swr";
import { Churches } from "@/types/churches";
import { CURRENT_CHURCH_KEY } from "@/hooks/useCurrentChurch";
import { useState } from "react";
import DetailContent from "./DetailContent";

const DetailSection = () => {
  const [toggle, setToggle] = useState(false);
  const { data: currentChurch } = useSWR<Churches>(CURRENT_CHURCH_KEY);
  console.log(currentChurch);

  return (
    <div
      className={`${styles.detailSection} ${
        currentChurch ? styles.selected : ""
      } ${toggle ? styles.toggle : ""}`}
    >
      <div className={styles.header}>
        <button
          className={`${styles.arrowButton} ${toggle ? styles.toggle : ""}`}
          onClick={() => setToggle(!toggle)}
          disabled={!currentChurch}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {currentChurch ? (
          <p className={`${styles.title} ${toggle ? styles.toggle : ""}`}>
            {currentChurch?.churchName}
          </p>
        ) : (
          <p className={styles.title}>
            마커를 클릭하면 그들의 정보가 드러납니다
          </p>
        )}
      </div>
      <DetailContent currentChurch={currentChurch} toggle={toggle} />
    </div>
  );
};
export default DetailSection;
