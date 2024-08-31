import React from "react";
import Navbar from "./Navbar";
import BubbleButton from "./BubbleButton";
import PrimaryButton from "./PrimaryButton";

const Banner = () => {
  return (
    <div
      className="banner bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('banner.svg')" }}
    >
      <div className="container">
        <h1 className="mb-8 lg:text-[100px] md:text-[70px] sm:text-[55px] text-[35px] font-bold text-center md:leading-[100px] sm:leading-[65px]">
          Building in stealth.
          <br />
          Empowered to disrupt.
        </h1>
        <p className="max-w-[900px] mx-auto text-[#CACAD0]  text-center md:text-[28px] text-[20px] sm:leading-[36px] leading-[30px]">
          Empowered by cutting-edge
          technology and bold ideas, we're not just preparing for the
          future—we're designing it.
        </p>

        <div className="w-[155px] mx-auto mt-16">
          <PrimaryButton btnText={"Get In Touch"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
