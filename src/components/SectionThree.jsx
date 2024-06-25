import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import blackBg from "../assets/blackbg.png";
import serviceOne from "../assets/one.webp";
import { FaServicestack } from "react-icons/fa6";
import { GrServicePlay } from "react-icons/gr";

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

export default function SectionThree() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const introTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [0, 1, 0]
  );
  const servicesImageOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.9, 1],
    [0, 1, 1, 0]
  );

  const serviceOneOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4],
    [0, 0.5, 1, 0]
  );
  const serviceTwoOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6, 0.7],
    [0, 0.5, 1, 0]
  );

  const serviceThreeOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [0, 0.5, 1, 0]
  );

  const xServiceOne = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5],
    ["0%", "5%", "10%", "30%"]
  );
  const xServiceTwo = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.8],
    ["0%", "5%", "10%", "30%"]
  );

  const xServiceThree = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    ["0%", "5%", "10%", "30%"]
  );

  const scrollBarYProgress = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.7, 1],
    ["0%", "200%", "300%", "400%"]
  );
  const scrollBarYProgressOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.7, 1],
    [0, 1, 1, 0]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    ["0%", "55%", "90%", "100%"]
  );

  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [3, 1, 1, 0.5]
  );

  return (
    <section ref={targetRef}>
      <div className="relative h-[800vh] text-primaryTextColor">
        <div className="sticky top-1/2 flex origin-center -translate-y-1/2 w-screen justify-center">
          <img src={blackBg} alt="" className="w-full" />
        </div>
        {/* Services intro */}
        <div className=" absolute text-9xl font-Anton flex items-center  w-full left-1/3 -top-24 -translate-x-1/2">
          <motion.h3
            style={{ opacity: introTextOpacity, x, scale }}
            className=""
          >
            our services
          </motion.h3>
        </div>
        <div className="sticky w-1/2 top-1/2 -translate-y-1/2">
          <motion.img
            style={{ opacity: servicesImageOpacity }}
            src={serviceOne}
            alt=""
            className="w-full rounded-r-3xl"
          />

          {/* Services scroll progress bar */}
          <div className="absolute  top-1/3 -right-[43vw] w-10/12">
            <motion.div
              style={{ opacity: scrollBarYProgressOpacity }}
              className="relative h-20 w-1 bg-primaryTextColor rounded-full"
            >
              {/* <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-lightBlue/30 w-10 h-10 rounded-full"></div> */}
              <motion.div
                style={{
                  y: scrollBarYProgress,
                  opacity: scrollBarYProgressOpacity,
                  x: "-50%",
                }}
                className="absolute left-1/2 -top-3  bg-lightBlue w-5 h-5 rounded-full"
              ></motion.div>
            </motion.div>
          </div>

          {/* Services Contents */}
          {/* Service One */}
          <motion.div
            className="absolute top-1/3 -right-[45vw] w-10/12"
            style={{ opacity: serviceOneOpacity, x: xServiceOne }}
          >
            <h4 className="text-4xl font-Anton">
              Software as a Service (Saas)
            </h4>
            <p className=" text-primaryTextColor/60">
              We provide SaaS products that are web-hosted, subscription-based
              software products that enable our users to use them over the
              internet.
            </p>
            <button className="px-8 py-1 bg-btnColor mt-3 rounded-md transition-all duration-300 ease-in-out hover:bg-darkBlue hover:text-lightBlue">
              More
            </button>
          </motion.div>

          {/* Service Two */}
          <motion.div
            className="absolute top-1/3 -right-[45vw] w-10/12"
            style={{ opacity: serviceTwoOpacity, x: xServiceTwo }}
          >
            <h4 className="text-4xl font-Anton">Website Development</h4>
            <p className=" text-primaryTextColor/60">
              We create all types of beautiful web design, using cutting-edge
              web development technologies.
            </p>
            <button className="px-8 py-1 bg-btnColor mt-3 rounded-md transition-all duration-300 ease-in-out hover:bg-darkBlue hover:text-lightBlue">
              More
            </button>
          </motion.div>

          {/* Service Three */}
          <motion.div
            className="absolute top-1/3 -right-[45vw] w-10/12"
            style={{ opacity: serviceThreeOpacity, x: xServiceThree }}
          >
            <h4 className="text-4xl font-Anton">Mobile Development</h4>
            <p className=" text-primaryTextColor/60">
              We provide mobile application development that can assist you with
              anything from ideation and conceptualization to development,
              testing, and deployment.
            </p>
            <button className="px-8 py-1 bg-btnColor mt-3 rounded-md transition-all duration-300 ease-in-out hover:bg-darkBlue hover:text-lightBlue">
              More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
