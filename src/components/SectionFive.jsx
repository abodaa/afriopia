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

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  showParagraphOne: 0.25,
  hideParagraphOne: 0.3,
  showParagraphTwoStart: 0.35,
  showParagraphTwoEnd: 0.4,
  hideParagraphTwo: 0.5,
  showLoadingScreenStart: 0.53,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.78,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.95,
  endTextFadeInEnd: 1,
};

export default function SectionFour() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const positionClientsContainer = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "sticky";
  });
  const positionTIntroText = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "sticky";
  });

  const introTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.6, 1],
    [0, 1, 0.7, 0]
  );

  const scaleIntroText = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 1],
    [2, 1, 1, 1.5]
  );

  const scaleTeamsContainer = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.9, 1],
    [2, 1, 0.8, 0]
  );

  const xIntro = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    ["0%", "55%", "70%", "100%"]
  );

  const xClientsContainer = useTransform(
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
    <section ref={targetRef} className="bg-black">
      <div className="h-[300vh] pt-10">
        <motion.div
          style={{
            opacity: introTextOpacity,
            scale: scaleIntroText,
            position: positionTIntroText,
            // x:xIntro
          }}
          className="top-20 font-Anton text-center   "
        >
          <h3 className="text-lightBlue top-20 text-9xl font-Anton">
            Our Clients
          </h3>
          <p className="text-primaryTextColor -mt-10">
            Connecting with customers on their complex journeys
          </p>
        </motion.div>

        <motion.div
          style={{
            scale: scaleTeamsContainer,
            y: xClientsContainer,
            opacity: opacityTeamsContainer,
            position: positionClientsContainer,
          }}
          className="sticky top-1/2 grid grid-cols-6 content-center  items-center gap-10 "
        >
          {/* One */}
          <motion.div className="shadow-lg flex p-5 w-64 rounded-3xl h-64 bg-primaryTextColor hover:shadow-2xl hover:bg-primaryTextColor">
            <img src={kabyenad} alt="" className=" object-cover w-full" />
          </motion.div>

          {/* Two */}
          <div className="shadow-lg flex p-10 w-64 rounded-3xl h-64 bg-primaryTextColor hover:shadow-2xl">
            <img src={YuYana_Logo} alt="" className=" object-cover w-full" />
          </div>

          {/* Three */}
          <div className="shadow-lg flex p-10 w-64 rounded-3xl h-64 bg-primaryTextColor hover:shadow-2xl ">
            <img src={Green_Floral} alt="" className="object-cover w-full " />
          </div>

          {/* Four */}
          <div className=" shadow-lg flex p-10 w-64 rounded-3xl h-64 bg-primaryTextColor hover:shadow-2xl ">
            <img src={waterdrilling} alt="" className="object-contain w-full" />
          </div>

          {/* Five */}
          <div className=" shadow-lg flex p-10 w-64 rounded-3xl h-64 bg-primaryTextColor hover:shadow-2xl">
            <img src={zagol} alt="" className="object-contain w-full" />
          </div>

          {/* Six */}
          <div className=" shadow-lg flex p-10 w-64 rounded-3xl h-64 bg-primaryTextColor hover:shadow-2xl">
            <img src={restore} alt="" className="object-contain w-full" />
          </div>
          {/* Seven */}
          {/* <div className=" shadow-lg flex p-10 min-w-24 rounded-3xl h-64 bg-primaryTextColor/10 hover:shadow-2xl">
            <img src={el_ouzeir} alt="" className="object-contain w-full" />
          </div> */}
          {/* Eight */}
          {/* <div className=" shadow-lg flex p-10 min-w-24 rounded-3xl h-64 bg-primaryTextColor/10 hover:shadow-2xl">
            <img src={sid} alt="" className=" object-contain w-full" />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
