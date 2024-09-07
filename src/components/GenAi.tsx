import React from "react";
import { motion, useInView } from "framer-motion";
import PrimaryButton from "./PrimaryButton";

const GenAi = () => {
  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, y: 100 }, // Start below and invisible
    visible: { opacity: 1, y: 0 }, // End at the normal position
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="ellipse-shadow-inner min-h-[850px] h-fit overflow-hidden">
      <div
        ref={ref}
        className="max-w-[1600px] mx-auto relative ellipse-shadow-inner"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div
            className="absolute w-full md:h-[700px] sm:h-[450px] h-[350px] top-0 left-0 right-0 mx-auto bg-cover bg-center bg-no-repeat z-10 ellipse-shadow-inner"
            style={{
              backgroundImage: "url('earth-shade.png')",
            }}
          ></div>
        </motion.div>

        <div
          className="absolute md:top-[200px] sm:top-[130px] top-[100px] w-full lg:min-h-[500px] md:h-[350px] sm:h-[250px] h-[200px] bg-cover bg-center bg-no-repeat z-10"
          style={{
            backgroundImage: "url('earth-solid.png')",
          }}
        ></div>

        <div className="absolute md:top-[310px] sm:top-[230px] top-[180px] w-full z-20 px-4 lg:bg-transparent bg-[#0a0a16]">
          <motion.h1
            className="mb-8 max-w-[800px] mx-auto md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px] text-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Building the Next Big Thing with Generative AI
          </motion.h1>
          <motion.p
            className="max-w-[800px] mx-auto text-[#CACAD0] sm:text-2xl text-xl text-center sm:leading-[32px] leading-[28px]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            We're on a mission to create the next groundbreaking innovation with
            generative AI at its core. By leveraging the most advanced
            technologies, we're developing solutions that will redefine
            industries and set new standards for what's possible. Join us as we
            shape the future with creativity, intelligence, and limitless
            potential.
          </motion.p>
          <motion.div
            className="w-[155px] mx-auto mt-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <PrimaryButton btnText={"Get In Touch"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GenAi;
