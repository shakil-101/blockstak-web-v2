import Image from "next/image";
import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GenAiEducation = () => {
  useEffect(() => {
    gsap.to(".scroll-genai1", {
      y: -100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scroll-genai1",
        start: "top center",
        scrub: true,
      },
    });
    gsap.to(".scroll-genai2", {
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scroll-genai2",
        start: "top center",
        scrub: true,
      },
    });

    gsap.to(".scroll-genai3", {
      y: 80,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scroll-genai3",
        start: "top center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="pb-40 pt-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="xl:col-span-9 md:col-span-8 sm:col-span-7 col-span-12 grid grid-cols-12 gap-6">
            <div className=" lg:col-span-4 md:col-span-7 col-span-6 md:h-[260px] h-[200px] relative order-1">
              <Image
                className="scroll-genai1 w-full h-full object-cover rounded-lg"
                src="/education1.png"
                alt="Gen AI for Education"
                layout="fill"
                priority
              />
            </div>

            <div className="lg:col-span-5 col-span-12 xs:h-[260px] h-[200px] relative lg:order-2 order-3">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src="/education2.png"
                alt="Gen AI for Education"
                layout="fill"
                priority
              />
            </div>

            <div className="lg:col-span-3 md:col-span-5 col-span-6 md:h-[260px] h-[200px] relative lg:order-3 order-2">
              <Image
                className="scroll-genai2 w-full h-full object-cover rounded-lg"
                src="/education3.png"
                alt="Gen AI for Education"
                layout="fill"
                priority
              />
            </div>

            <div className="scroll-genai3 md:block hidden  col-span-12 order-4">
              <div className=" max-w-[650px] mt-14">
                <h1 className="text-[#FAFAFF] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px]">
                  Gen AI for Education
                </h1>
                <p className="text-xl leading-[26px] mt-8">
                  Historically, AI was used to understand and recommend
                  information. Now, generative AI can also help us create new
                  content. Generative AI builds on existing technologies, like
                  large language models (LLMs) which are trained on large
                  amounts of text and learn to predict the next word in a msg.
                </p>
              </div>
            </div>
          </div>
          <div className="sm:block hidden xl:col-span-3 md:col-span-4 col-span-5 relative md:min-h-[680px]">
            <Image
              className=" w-full h-full object-cover rounded-lg"
              src="/education4.png"
              alt="Gen AI for Education"
              layout="fill"
              priority
            />
          </div>
        </div>

        <div className="scroll-genai3 md:hidden block mt-14">
          <h1 className="text-[#FAFAFF] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px]">
            Gen AI for Education
          </h1>
          <p className="text-xl leading-[26px] mt-8">
            Historically, AI was used to understand and recommend information.
            Now, generative AI can also help us create new content. Generative
            AI builds on existing technologies, like large language models
            (LLMs) which are trained on large amounts of text and learn to
            predict the next word in a msg.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenAiEducation;
