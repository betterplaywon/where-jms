import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsShare } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-3 p-3">
      <nav className="font-normal text-xs">
        <Link
          className="flex items-center text-base text-black shrink-0 mr-5"
          href="/"
        >
          <h1 className="text-2xl font-bold">WHERE - JMS</h1>
        </Link>
      </nav>
      <nav className="flex items-center gap-3 font-medium text-sm text-center">
        <button className="mr-1 p-2 bg-white drop-shadow-md">
          <BsShare />
        </button>
        <button className="p-2 bg-white drop-shadow-md">
          <VscFeedback />
        </button>
      </nav>
    </header>
  );
};

export default Header;
