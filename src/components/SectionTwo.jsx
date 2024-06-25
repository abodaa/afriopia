import React, { useRef } from "react";
import afriopiaVid from "../assets/afriopiaVid.mp4";
import { useScroll, useTransform, motion } from "framer-motion";
import { BiPlayCircle } from "react-icons/bi";

export default function SectionTwo() {
  const targetRef = useRef(null);
  // Control the scroll event
  const { scrollYProgress } = useScroll({
    target: targetRef, // target element
    offset: ["start end", "end start"], // a point where a target and a container meet
  });

  // Onscroll progress map the values to the progress values
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 1], [1, 1.3, 0]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ["0%", "-55%", "-60%", "-80%"]
  );
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  return (
    <section ref={targetRef} className="mt-[-20vh]">
      <div className="h-[300vh] w-full">
        <div className="sticky top-[8vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, opacity }} className=" origin-top relative shadow-2xl">
              <video
                src={afriopiaVid}
                type="video/mp4"
                alt=""
                controls
                className="h-[75vh] max-h-[45vw] w-auto rounded-xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <BiPlayCircle className=" text-6xl text-primaryTextColor/80"/>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
