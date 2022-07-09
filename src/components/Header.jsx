import React from "react";
import { ReactComponent as Logo } from "../assets/trello_logo.svg";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-2xl drop-shadow-xl h-[60px] flex flex-row items-center justify-between pl-4">
      <div className="inline-block">
        <Logo />
      </div>
      <div className="inline-flex h-full items-center">
        <p className="text-[#172B4D] text-2xl px-3">Log in</p>
        <p className="h-full bg-[#0065ff] inline-flex items-center px-4 text-2xl text-white">
          Get Trello for free
        </p>
      </div>
    </header>
  );
};

export default Header;
