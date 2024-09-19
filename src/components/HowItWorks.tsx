"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const [processList, setProcessList] = useState([
    {
      title:
        "Historically, AI was used to understand and recommend information.",
      shortDescription:
        "Historically, AI was used to understand and recommend information. Now, generative AI can also help us create new content. Generative AI builds on existing technologies, like large language models (LLMs) which are trained on large amounts of text and learn to predict the next word in a msg.",
    },
    {
      title: "AI has advanced significantly in recent years.",
      shortDescription:
        "AI has moved from understanding data to actively generating new content. With advances in machine learning, AI can now generate text, images, and even music, opening up new possibilities for creativity.",
    },
    {
      title: "Generative AI is now a powerful tool for content creation.",
      shortDescription:
        "From art to literature, generative AI is being used in various fields to assist and enhance creativity. It's not just about automating tasks, but also enabling new forms of expression.",
    },
  ]);

  useEffect(() => {
    // Apply GSAP animation on component mount
    gsap.to(".process-item", {
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".process-item",
        start: "top center", // When the top of the element is at 80% of the viewport
        // end: "bottom 20%", // When the bottom of the element is at 20% of the viewport
        scrub: true, // Smoothly transition with the scroll
      },
    });
  }, []);

  return (
    <div className="pt-20">
      <div className="container">
        <h2 className="sm:text-2xl text-xl text-center sm:leading-[32px] leading-[28px]"></h2>
        <h1 className="process-item text-[#FAFAFF] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px]">
          How Does it Work?
        </h1>
        <div className="mt-28">
          {processList.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 lg:gap-x-20 md:gap-x-10 gap-y-10 mb-20 "
            >
              <div className="lg:col-span-3 md:col-span-2 col-span-12">
                <p className="text-2xl leading-[31px]">0{index + 1}</p>
              </div>
              <div className="md:col-span-4 col-span-12">
                <h2 className="text-2xl font-semibold leading-[31px]">
                  {item.title}
                </h2>
              </div>
              <div className="lg:col-span-5 md:col-span-6 col-span-12">
                <p className="text-xl leading-[26px]">
                  {item.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
