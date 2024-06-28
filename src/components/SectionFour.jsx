import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import brook from "../assets/brook.png";
import yordanos from "../assets/yordanos.png";
import ruth from "../assets/ruth.png";
import rosa from "../assets/rosa.png";
import yared from "../assets/yared.png";
import fasika from "../assets/fasika.png";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";

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

  const positionTeamsContainer = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "sticky";
  });
  const positionTIntroText = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "sticky";
  });

  const introTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 1],
    [0, 1, 1, 0.5]
  );

  const scaleIntroText = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.4],
    [2, 1, 1, 0.9]
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

  const xTeamsContainer = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    ["0%", "-55%", "-70%", "-100%"]
  );

  const opacityTeamsContainer = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [1, 0.8, 0.3, 0]
  );
  return (
    <section ref={targetRef}>
      <div className="h-[400vh] pt-10">
        <motion.h3
          style={{
            opacity: introTextOpacity,
            scale: scaleIntroText,
            position: positionTIntroText,
            x: xIntro,
          }}
          className="text-lightBlue top-20 text-9xl font-Anton text-center   "
        >
          Meet Our Team
        </motion.h3>

        <motion.div
          style={{
            scale: scaleTeamsContainer,
            x: xTeamsContainer,
            opacity: opacityTeamsContainer,
            y: "50%",
            positionTeamsContainer,
          }}
          className="sticky top-32  flex  items-center gap-6"
        >
          {/* One */}
          <div
            //   style={{ opacity:  }}
            className=" text-darkBlue capitalize p-14 rounded-3xl  shadow-secondaryTextColor flex flex-col gap-3 text-center justify-center items-center bg-primaryTextColor/90 w-fit"
          >
            <img
              src={brook}
              alt=""
              className="w-32 h-32 object-cover rounded-full"
            />
            <div>
              <h2 className=" text-2xl font-Anton">Brook</h2>
              <p className="  text-btnColor/70">CEO</p>
            </div>
            <div className="flex items-center gap-2 text-darktBlue">
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <BsEnvelope className="absolute top-1/2 left-1/2 -translate-x-1/2 text-lg -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiTwitter className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Two */}
          <div className=" text-darkBlue capitalize p-14 rounded-3xl  flex flex-col gap-3 text-center justify-center items-center bg-primaryTextColor/90 w-fit">
            <img
              src={ruth}
              alt=""
              className="w-32 h-32 object-cover rounded-full"
            />
            <div>
              <h2 className=" text-2xl font-Anton">Ruth</h2>
              <p className="  text-btnColor/70">Operation Manager</p>
            </div>
            <div className="flex items-center gap-2 text-darktBlue">
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <BsEnvelope className="absolute top-1/2 left-1/2 -translate-x-1/2 text-lg -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiTwitter className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Three */}
          <div className=" text-darkBlue capitalize p-14 rounded-3xl flex flex-col gap-3 text-center justify-center items-center bg-primaryTextColor/90 w-fit">
            <img
              src={yared}
              alt=""
              className="w-32 h-32 object-cover rounded-full "
            />
            <div>
              <h2 className=" text-2xl font-Anton">Yared</h2>
              <p className="  text-btnColor/70">CTO</p>
            </div>
            <div className="flex items-center gap-2 text-darktBlue">
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <BsEnvelope className="absolute top-1/2 left-1/2 -translate-x-1/2 text-lg -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiTwitter className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Four */}
          <div className=" text-darkBlue capitalize p-14 rounded-3xl flex flex-col gap-3 text-center justify-center items-center bg-primaryTextColor/90 w-fit">
            <img
              src={yordanos}
              alt=""
              className="w-32 h-32 object-cover rounded-full "
            />
            <div>
              <h2 className=" text-2xl font-Anton">yordanos</h2>
              <p className="  text-btnColor/70">Finance officer</p>
            </div>
            <div className="flex items-center gap-2 text-darktBlue">
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <BsEnvelope className="absolute top-1/2 left-1/2 -translate-x-1/2 text-lg -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiTwitter className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Five */}
          <div className=" text-darkBlue capitalize p-14 rounded-3xl  flex flex-col gap-3 text-center justify-center items-center bg-primaryTextColor/90 w-fit">
            <img
              src={fasika}
              alt=""
              className="w-32 h-32 object-cover rounded-full "
            />
            <div>
              <h2 className=" text-2xl font-Anton">Fasika</h2>
              <p className="  text-btnColor/70">Full Stack Dev</p>
            </div>
            <div className="flex items-center gap-2 text-darktBlue">
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <BsEnvelope className="absolute top-1/2 left-1/2 -translate-x-1/2 text-lg -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiTwitter className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Six */}
          <div className=" text-darkBlue capitalize p-14 rounded-3xl s flex flex-col gap-3 text-center justify-center items-center bg-primaryTextColor/90 w-fit">
            <img
              src={rosa}
              alt=""
              className="w-32 h-32 object-cover rounded-full "
            />
            <div>
              <h2 className=" text-2xl font-Anton">Rosa</h2>
              <p className="  text-btnColor/70">Content Creator</p>
            </div>
            <div className="flex items-center gap-2 text-darktBlue">
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <BsEnvelope className="absolute top-1/2 left-1/2 -translate-x-1/2 text-lg -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
              <div className="relative w-10 h-10  bg-lightBlue p-1.5 text-4xl rounded-full transition-all duration-300 ease-in-out cursor-pointer  hover:bg-darkBlue  hover:text-lightBlue">
                <CiTwitter className="absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
