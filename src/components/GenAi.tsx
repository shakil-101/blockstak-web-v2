import React from "react";
import PrimaryButton from "./PrimaryButton";

const GenAi = () => {
  return (
    <div className="bg-[#0a0a16]">
      <div className="relative min-h-[700px]">
        <div
          className="z-10 bg-cover bg-top bg-no-repeat lg:h-[800px] md:h-[600px] h-[300px] ellipse-shadow-inner"
          style={{ backgroundImage: "url('ellipse-star.svg')" }}
        >
          <div className="absolute 2xl:bottom-[15%] lg:bottom-[20%] md:bottom-[10%] sm:bottom-[20%] bottom-[25%] w-full z-20 px-4">
            {/* Increased z-index for text and button */}
            <h1 className="mb-8 max-w-[800px] mx-auto md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px] text-center ">
              Building the Next Big Thing with Generative AI
            </h1>
            <p className="max-w-[800px] mx-auto text-[#CACAD0] sm:text-2xl text-xl text-center sm:leading-[32px] leading-[28px]">
              We're on a mission to create the next groundbreaking innovation
              with generative AI at its core. By leveraging the most advanced
              technologies, we're developing solutions that will redefine
              industries and set new standards for what's possible. Join us as
              we shape the future with creativity, intelligence, and limitless
              potential.
            </p>
            <div className="w-[155px] mx-auto mt-16">
              <PrimaryButton btnText={"Get In Touch"} />
            </div>
          </div>
        </div>
        <div className="backup-div absolute bottom-0 left-0 bg-[#0a0a16] h-36 z-0 w-full"></div>
      </div>
    </div>
  );
};

export default GenAi;
