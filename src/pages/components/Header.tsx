import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";
import { BsShare } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import useMap from "@/hooks/useMap";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";

const Header = () => {
  const { resetMapOptions, getMapOptions } = useMap();
  const router = useRouter();

  const changeAndCopyUrl = useCallback(() => {
    // 현재 지도의 options를 가져와서
    const mapOptions = getMapOptions();
    // query를 만들고, 해당 query를 이용해 routing한다
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;
    router.replace(query);
    copy(location.origin + query);
  }, [router, getMapOptions]);

  return (
    <header className="absolute top-0 left-0 w-full h-2 px-4 flex justify-between items-center z-50 mt-6 p-3">
      <nav className="drop-shadow-lg">
        <Link
          onClick={resetMapOptions}
          className="flex items-center text-black shrink-0 mr-5 bg-white"
          href="/"
        >
          <h1 className="text-3xl font-bold">WHERE - JMS</h1>
        </Link>
      </nav>
      <nav className="flex items-center gap-3 text-sm text-center">
        <button
          className="mr-1 p-4 bg-white drop-shadow-md"
          onClick={changeAndCopyUrl}
        >
          <BsShare />
        </button>
        <button className="p-4 bg-white drop-shadow-md">
          <VscFeedback />
        </button>
      </nav>
    </header>
  );
};

export default Header;
