import React from "react";
import { Churches } from "@/types/churches";
import { IoIosArrowUp } from "react-icons/io";
import styles from "../../../styles/detail.module.scss";
import { BsShare } from "react-icons/bs";
import copy from "copy-to-clipboard";

interface Props {
  currentChurch?: Churches;
  onClick: () => void;
  toggle: boolean;
}

const DetailHeader = ({ currentChurch, onClick, toggle }: Props) => {
  const copyUrl = () => {
    copy(location.origin + "/" + currentChurch?.churchName);
  };

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
        <div className="flex flex-row justify-between items-center">
          <p className={`${styles.title} ${toggle ? styles.toggle : ""}`}>
            {currentChurch?.churchName}
          </p>
          <button
            className="mr-1 p-3 bg-white drop-shadow-md"
            onClick={copyUrl}
          >
            <BsShare />
          </button>
        </div>
      ) : (
        <p className={styles.title}>마커를 클릭하면 그들의 정보가 드러납니다</p>
      )}
    </header>
  );
};

export default DetailHeader;
