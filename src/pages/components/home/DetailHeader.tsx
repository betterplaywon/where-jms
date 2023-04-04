import React from "react";
import { Churches } from "@/types/churches";
import { IoIosArrowUp } from "react-icons/io";
import styles from "../../../styles/detail.module.scss";

interface Props {
  currentChurch: Churches;
  onClick: () => void;
  toggle: boolean;
}

const DetailHeader = ({ currentChurch, onClick, toggle }) => {
  return (
    <header className={styles.header}>
      <button
        className={`${styles.arrowButton} ${toggle ? styles.toggle : ""}`}
        onClick={onClick}
        disabled={!currentChurch}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </button>
      {currentChurch ? (
        <p className={`${styles.title} ${toggle ? styles.toggle : ""}`}>
          {currentChurch?.churchName}
        </p>
      ) : (
        <p className={styles.title}>마커를 클릭하면 그들의 정보가 드러납니다</p>
      )}
    </header>
  );
};

export default DetailHeader;
