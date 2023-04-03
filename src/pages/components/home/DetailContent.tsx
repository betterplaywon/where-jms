import Image from "next/image";
import type { Churches } from "@/types/churches";
import Naver from "public/images/naver.png";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import styles from "../../../styles/detail.module.scss";

type Props = {
  currentChurch?: Churches;
  toggle: boolean;
};

const DetailContent = ({ currentChurch, toggle }: Props) => {
  if (!currentChurch) return null;
  return (
    <div className={`${styles.detailContent} ${toggle ? styles.toggle : ""}`}>
      {toggle && (
        <>
          <div className={styles.description}>
            <h2>😡 설명</h2>
            <p>{currentChurch.description}</p>
          </div>
          <hr />
          <div className={styles.basicInfo}>
            <h2>기본 정보</h2>
            <div className="address">
              <IoLocationOutline size={20} />
              <span>{currentChurch.address || "정보가 없습니다."}</span>
            </div>

            <div className="naverUrl">
              <Image src={Naver} width={20} height={20} alt="" />
              <a
                href={currentChurch.naverUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>네이버 상세 정보</span>
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.infos}>
            <h2>키워드</h2>
            <ul className="flex flex-row">
              {currentChurch.info?.map(info => (
                <li className={styles.info} key={info.keyword}>
                  <span className={styles.keyword}>{info.keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
export default DetailContent;
