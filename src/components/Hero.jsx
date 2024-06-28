import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const targetRef = useRef(null);
  // Control the scroll event
  const { scrollYProgress } = useScroll({
    target: targetRef, // target element
    offset: ["end end", "end start"], // a point where a target and a container meet
  });

  // Onscroll progress map the values to the progress values
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative h-screen text-center "
    >
      <motion.div
        style={{ scale, x: "-50%", y: "-50%", position }}
        className=" flex flex-col items-center gap-1 justify-center left-1/2 top-1/2 "
      >
        {/* <div className="relative h-20 w-1 bg-primaryTextColor">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-lightBlue/30 w-10 h-10 rounded-full"></div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-lightBlue/30 w-5 h-5 rounded-full"></div>
        </div> */}
        <p className="capitalize text-primaryTextColor text-[5rem] font-Anton">
          making a difference <b className=" text-lightBlue">one byte</b> at a time
        </p>
        <p></p>
        <p className="text-lg text-midBlue">
          At afriopia, we're catalysts of tech evolution.
        </p>

        <button className="px-8 py-2 mt-3 rounded-md text-xl bg-lightBlue text-darkBlue">
          Discover
        </button>
      </motion.div>
    </motion.section>
  );
}
