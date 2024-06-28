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

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  const introTextOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const servicesImageOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.9, 1],
    [0, 1, 1, 0]
  );

  const serviceOneOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    [0, 1, 0]
  );
  const serviceTwoOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );

  const serviceThreeOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );

  const serviceFourOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );

  const xServiceOne = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    ["0%", "-10%", "-20%"]
  );
  const xServiceTwo = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    ["0%", "-10%", "-20%"]
  );

  const xServiceThree = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8],
    ["0%", "-10%", "-20%"]
  );
  const xServiceFour = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ["0%", "-10%", "-20%"]
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

  const xIntro = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ["0%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55%"]
  );

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [2, 1, 1, 0.8]);

  return (
    <section ref={targetRef} className="bg-black pt-20">
      <div className="relative h-[800vh] text-primaryTextColor">
        {/* <div className="sticky -mb-64 top-1/2 flex origin-center -translate-y-1/2 w-screen justify-center">
          <img src={blackBg} alt="" className="w-full" />
        </div> */}
        {/* Services intro */}
        <motion.h3
          style={{ opacity: introTextOpacity, scale, x: xIntro }}
          className="sticky text-9xl font-Anton top-4 text-center "
        >
          our services
        </motion.h3>
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
            className="absolute  top-1/3 -right-[45vw] w-10/12"
            style={{ opacity: serviceOneOpacity, x: xServiceOne }}
          >
            <h4 className="text-4xl font-Anton text-lightBlue">
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
              web development technologies. We provide everything from domain
              name purchases to domain hosting, website design, web hosting and
              maintenance plans to suit your needs. We also offer a free
              consultation for businesses looking to get started with a new
              website or redesign an existing one.
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
            <h4 className="text-4xl text-lightBlue  font-Anton">
              Mobile Development
            </h4>
            <p className=" text-primaryTextColor/60">
              We provide mobile application development that can assist you with
              anything from ideation and conceptualization to development,
              testing, and deployment. Our experienced team of engineers and
              designers will work with you to create your perfect app for both
              Android and iOS.
            </p>
            <button className="px-8 py-1 bg-btnColor mt-3 rounded-md transition-all duration-300 ease-in-out hover:bg-darkBlue hover:text-lightBlue">
              More
            </button>
          </motion.div>

          {/* Service Three */}
          <motion.div
            className="absolute top-1/3 -right-[45vw] w-10/12"
            style={{ opacity: serviceFourOpacity, x: xServiceFour }}
          >
            <h4 className="text-4xl font-Anton">Digital Marketing</h4>
            <p className=" text-primaryTextColor/60">
              We provide Digital Marketing Services to help your brand grow by
              creating engaging campaigns for social media, increasing online
              visibility through search engines, and reaching customers via
              email markating. Our experts will develop a customzed Strategy to
              fit your unique business needs and improve your campaigns to
              ensure you get the most out of your investment.
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
