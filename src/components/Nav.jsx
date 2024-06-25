import React from "react";
import logo from "../assets/Logo.svg";

export default function () {
  return (
    <div className="fixed z-20 w-full flex items-center justify-between px-14 py-4  text-primaryTextColor">
      <div className="flex items-center font-extralight">
        <img src={logo} alt="" className="w-10" />
        <p>Afriopia</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-10 min-h-0.5 bg-primaryTextColor "></div>
        <div className="w-9 h-1 bg-primaryTextColor "></div>
        <div className="w-8 h-1.5 bg-primaryTextColor "></div>
      </div>
    </div>
  );
}
