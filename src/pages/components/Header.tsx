import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsShare } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full h-2 px-4 flex justify-between items-center z-50 mt-6 p-3">
      <nav className="drop-shadow-lg">
        <Link
          className="flex items-center text-black shrink-0 mr-5 bg-white"
          href="/"
        >
          <h1 className="text-3xl font-bold">WHERE - JMS</h1>
        </Link>
      </nav>
      <nav className="flex items-center gap-3 text-sm text-center">
        <button className="mr-1 p-4 bg-white drop-shadow-md">
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
