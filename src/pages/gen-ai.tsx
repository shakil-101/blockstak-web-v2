"use client";

import React from "react";
import { Inter, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GenAiBanner from "@/components/GenAiBanner";
// import HowItWorks from "@/components/HowItWorks";
import GenAiEducation from "@/components/GenAiEducation";
import Wave from "@/components/Wave";

const ds_sans = DM_Sans({ subsets: ["latin"] });

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  ssr: false,
});
const Genai = () => {
  return (
    <main
      className={`text-white min-h-screen overflow-hidden  ${ds_sans.className}`}
    >
      <SmoothScroll>
        <Navbar />
        <GenAiBanner />
        <Wave />
        <HowItWorks />
        <GenAiEducation />
        <Footer />
      </SmoothScroll>
    </main>
  );
};

export default Genai;
