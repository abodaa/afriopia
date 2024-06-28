import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// Clients
import kabyenad from "../assets/kabyenad.png";
import Green_Floral from "../assets/Green_Floral.png";
import YuYana_Logo from "../assets/YuYana_Logo.png";
import zagol from "../assets/zagol.png";
import restore from "../assets/restore.png";
import waterdrilling from "../assets/waterdrilling.png";
import el_ouzeir from "../assets/el_ouzeir.png";
import sid from "../assets/sid.png";

export default function SectionFive() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "sticky";
  });

  const introTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 1, 1, 1]
  );

  const xIntro = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    ["0%", "0%", "0%", "0%"]
  );
  const scaleIntroText = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [2, 1, 1, 0.9]
  );

  const scaleTeamsContainer = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6, 0.7],
    [2, 1, 1, 0.9]
  );

  const xTeamsContainer = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    ["0%", "55%", "70%", "100%"]
  );

  const opacityTeamsContainer = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [1, 0.8, 0.3, 0]
  );
  return (
    <section ref={targetRef} className=" bg-darkBlue">
      <div className="h-[300vh] flex flex-col items-center ">
        <motion.div
          style={{
            opacity: introTextOpacity,
            scale: scaleIntroText,
            position,
          }}
          className="text-center w-full top-20 lef-1/2 "
        >
          <p className="text-lightBlue text-8xl font-Anton">
            SUBSCRIBE TO OUR DAILY NEWSLETTER
          </p>
          <p className=" text-lightBlue/60 w-1/2 m-auto -mt-3">
            We're pioneers of technological evolution. Our relentless
            commitment? To redefine the digital landscape by crafting
            groundbreaking websites, intuitive software, and transformative
            mobile apps
          </p>
        </motion.div>
        <form className="sticky top-[70%] mt-10 w-1/2 flex items-center gap-6 ">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-8 py-3 rounded-md w-full bg-white/80 placeholder-darkBlue text-darkBlue outline-0"
          />
          <button className=" bg-lightBlue py-2 px-6 text-xl w-1/3 rounded-md text-darkBlue transition-all duration-300 ease-in-out hover:bg-lightBlue/70 hover:text-darkBlue">
            Submit
          </button>
        </form>
      </div>
      <div class="flex items-center justify-center pb-6 gap-1 text-sm text-primaryTextColor md:text-md">
        <button class="relative text-sm w-4 h-4 rounded-full border-2 border-primaryTextColor p-">
          <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            C
          </p>
        </button>
        <p>2024 Afriopia Unified Systems. All Rights Reserved</p>
      </div>
    </section>
  );
}
