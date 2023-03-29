import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/pages/components/Header";
import MapPart from "@/pages/components/home/MapPart";
import { Churches } from "@/types/churches";
import useChurches from "@/hooks/useChurches";
import { NextPage } from "next";

interface Props {
  stores: Churches[];
}

const Home: NextPage<Props> = ({ churches }) => {
  const { initializeChurches } = useChurches();

  useEffect(() => {
    initializeChurches(churches);
  }, [initializeChurches, churches]);

  console.log(churches);

  return (
    <>
      <Header />
      <main style={{ width: "100%", height: "100%" }}>
        <MapPart />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const churches = await (await import("../../public/churches.json")).default;

  return {
    props: { churches },
    // 데이터 변동이 거의 없을거라 생각해 revalidate값은 추가하지 않음
  };
}
