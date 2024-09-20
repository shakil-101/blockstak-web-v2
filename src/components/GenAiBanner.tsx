import Image from "next/image";
import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GenAiBanner = () => {
  useEffect(() => {
    gsap.to(".scroll-banner1", {
      y: -150,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scroll-banner1",
        start: "top center",
        scrub: true,
      },
    });

    gsap.to(".scroll-banner2", {
      y: -120,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scroll-banner2",
        start: "top center",
        scrub: true,
      },
    });

    gsap.to(".scroll-banner3", {
      y: -100,
      duration: 2,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scroll-banner3",
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative xl:pb-60 pb-20"
      style={{ backgroundImage: "url('genai-banner-shade.png')" }}
    >
      <div
        className="lg:hidden absolute top-0 left-0 w-full md:h-[800px] h-[800px] z-[-1] md:bg-cover bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('genai-banner-shade.png')",
        }}
      ></div>

      <div className="container">
        <div className=" md:min-h-[800px] min-h-[600px] flex items-center justify-center">
          <div>
            <h1 className=" mb-8 lg:text-[100px] md:text-[70px] sm:text-[55px] text-[35px] font-bold text-center md:leading-[100px] sm:leading-[65px]">
              Generative AI
              <br />
              Overview
            </h1>
            <p
              data-value="7"
              className="object max-w-[900px] mx-auto text-[#CACAD0]  text-center md:text-[28px] text-[20px] sm:leading-[36px] leading-[30px] capitalize "
            >
              Explore how teams at blockstk are using Generative AI to create
              new experiences for users.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 sm:gap-x-8 gap-y-8 lg:pt-20">
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 order-1">
            <div className="scroll-banner1 sm:h-[315px] h-[200px] relative">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src="/genai1.png"
                alt="Gen AI"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 lg:order-2 order-3">
            <div className="lg:-mt-36">
              <div className=" min-h-[315px] relative">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src="/genai2.png"
                  alt="Gen AI"
                  layout="fill"
                  priority
                />
              </div>
              <div className="scroll-banner2 lg:mt-48 mt-20">
                <p className="text-xl leading-[26px]">
                  Historically, AI was used to understand and recommend
                  information. Now, generative AI can also help us create new
                  content. Generative AI builds on existing technologies, like
                  large language models (LLMs) which are trained on large
                  amounts of text and learn to predict the next word in a msg.
                </p>
                <p className="text-xl leading-[26px] mt-6">
                  Historically, AI was used to understand and recommend
                  information. Now, generative AI can also help us create new
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 lg:order-3 order-2">
            <div className="scroll-banner3 sm:h-[315px] h-[200px] relative">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src="/genai3.png"
                alt="Gen AI"
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAiBanner;
