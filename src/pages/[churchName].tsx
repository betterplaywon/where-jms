import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import useCurrentChurches from "@/hooks/useCurrentChurch";
import DetailHeader from "./components/home/DetailHeader";
import DetailContent from "./components/home/DetailContent";

import type { Churches } from "@/types/churches";
import styles from "../styles/detail.module.scss";

interface Props {
  church: Churches;
}

const ChurchDetail: NextPage<Props> = ({ church }) => {
  const { setCurrentChurch } = useCurrentChurches();
  const router = useRouter();
  const toggle = true;
  console.log(church);

  const { coordinates } = church;

  const query = `/?zoom=10&lat=${coordinates[0]}&lng=${coordinates[1]}`;

  const moveToMap = () => {
    setCurrentChurch(church);
    router.push(query);
  };

  return (
    <section
      className={`${styles.detailSection} ${church ? styles.selected : ""} ${
        toggle ? styles.toggle : ""
      }`}
    >
      {/* ChurchDetail이 활성화된다는 것은 toggle이 true라는 의미 */}
      <DetailHeader
        currentChurch={church}
        onClick={moveToMap}
        toggle={toggle}
      />

      <DetailContent currentChurch={church} toggle={toggle} />
    </section>
  );
};

export default ChurchDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const churches = (await import("../../public/churches.json")).default;
  const paths = churches.map(church => ({
    // params key로 컴포넌트의 네이밍을 해주지 않아 오류 발생했었음
    params: { churchName: church.churchName },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const churches = (await import("../../public/churches.json")).default;
  const church = churches.find(
    church => church.churchName === params?.churchName
  );
  return { props: { church } };
};

// export async function getStaticPaths() {
//   const churches = (await import("../../public/churches.json")).default;
//   const paths = churches.map(church => ({
//     params: { churchName: church.churchName },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const churches = (await import("../../public/churches.json")).default;
//   const church = churches.find(
//     church => church.churchName === params?.churchName
//   );
//   return { props: { church } };
// }
