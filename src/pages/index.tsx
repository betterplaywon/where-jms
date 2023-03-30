import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/pages/components/Header";
import MapPart from "@/pages/components/home/MapPart";
import { Churches } from "@/types/churches";
import useChurches from "@/hooks/useChurches";
import { NextPage } from "next";

interface Props {
  churches: Churches[];
}

const Home: NextPage<Props> = ({ churches }) => {
  const { initializeChurches } = useChurches();

  useEffect(() => {
    initializeChurches(churches);
  }, [initializeChurches, churches]);

  return (
    <>
      <Header />
      <main className="w-full h-full">
        <MapPart />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const churches = (await import("../../public/churches.json")).default;

  return {
    props: { churches },
    // 데이터 변동이 거의 없을거라 생각해 revalidate값은 추가하지 않음
  };
}
