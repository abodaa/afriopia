import React, { useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { MdOutlineDashboard } from "react-icons/md";
import { CgClose } from "react-icons/cg";

export default function () {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed z-10 w-full flex items-center justify-between px-14 py-4  text-primaryTextColor">
      <div className="flex font-Anton bg-white px-6 py-2 shadow-xl rounded-full items-center gap-2 font-extralight">
        {/* <img src={logo} alt="" className="w-10" /> */}
        <p className=" text-darkBlue text-3xl">
          Afri<b className=" text-midBlue">opia</b>
        </p>
      </div>
      <ul className="top-6 left-1/2 -translate-x-1/2 left text-white backdrop-blur-md bg-midBlue/50 flex items-center gap-3  px-10 rounded-full uppercase">
        <button className=" uppercase py-3 px-4 transition-all duration-500 ease-in-out hover:bg-lightBlue hover:text-darkBlue">
          home
        </button>
        •
        <button className="  uppercase py-3 px-4 transition-all duration-500 ease-in-out hover:bg-lightBlue hover:text-darkBlue">
          About
        </button>
        •
        <button className="  uppercase py-3 px-4 transition-all duration-500 ease-in-out hover:bg-lightBlue hover:text-darkBlue">
          Services
        </button>
        •
        <button className="  uppercase py-3 px-4 transition-all duration-500 ease-in-out hover:bg-lightBlue hover:text-darkBlue">
          Training
        </button>
      </ul>
      <div className="relative w-12 h-12 gap-1 cursor-pointer border-lightBlue rounded-full ">
        {!menuOpen ? (
          <div
            onClick={() => setMenuOpen(true)}
            className=" flex flex-col gap-1"
          >
            <MdOutlineDashboard className=" text-3xl" />
          </div>
        ) : (
          <div onClick={() => setMenuOpen(false)}>
            <CgClose className=" text-3xl" />
          </div>
        )}

        {/* Popup Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 500,
                duration: 0.5,
              }}
              className="absolute uppercase right-0 flex flex-col gap-3 rounded-xl top-14 bg-darkBlue p-6 "
            >
              <li className=" transition-all duration-300 ease-in-out hover:text-lightBlue">
                outsourcing
              </li>
              <li className=" transition-all duration-300 ease-in-out hover:text-lightBlue">
                our team
              </li>
              <li className=" transition-all duration-300 ease-in-out hover:text-lightBlue">
                contact us
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
