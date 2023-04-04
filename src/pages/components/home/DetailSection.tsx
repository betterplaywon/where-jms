import styles from "../../../styles/detail.module.scss";
import { IoIosArrowUp } from "react-icons/io";
import useSWR from "swr";
import { Churches } from "@/types/churches";
import { CURRENT_CHURCH_KEY } from "@/hooks/useCurrentChurch";
import { useState } from "react";
import DetailContent from "./DetailContent";
import DetailHeader from "./DetailHeader";

const DetailSection = () => {
  const [toggle, setToggle] = useState(false);
  const { data: currentChurch } = useSWR<Churches>(CURRENT_CHURCH_KEY);

  return (
    <section
      className={`${styles.detailSection} ${
        currentChurch ? styles.selected : ""
      } ${toggle ? styles.toggle : ""}`}
    >
      <DetailHeader
        currentChurch={currentChurch}
        onClick={() => setToggle(!toggle)}
        toggle={toggle}
      />
      <DetailContent currentChurch={currentChurch} toggle={toggle} />
    </section>
  );
};
export default DetailSection;
