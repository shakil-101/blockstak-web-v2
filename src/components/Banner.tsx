import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import BubbleButton from "./BubbleButton";
import PrimaryButton from "./PrimaryButton";

const Banner = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let newScale = 1 + scrollPosition / 500;

    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current
          .querySelectorAll<HTMLElement>(".object")
          .forEach((move) => {
            const moving_value = move.getAttribute("data-value");
            const x = (e.clientX * Number(moving_value)) / 180;
            const y = (e.clientY * Number(moving_value)) / 180;

            move.style.transition = "transform 0.1s ease-out"; // Smooth transition
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
      }
    };

    const throttledMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => handleMouseMove(e));
    };

    document.addEventListener("mousemove", throttledMouseMove);

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative banner min-h-screen flex items-center justify-center overflow-hidden pt-20"
      // className="banner bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      // style={{ backgroundImage: "url('banner.svg')" }}
    >
      <div
        className=" absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out"
        style={{
          // transform: `scale(${scale})`,
          backgroundImage: "url('banner.svg')",
        }}
      ></div>

      <div className="container">
        <h1
          style={{
            transform: `scale(${scale})`,
          }}
          className=" mb-8 lg:text-[100px] md:text-[70px] sm:text-[55px] text-[35px] font-bold text-center md:leading-[100px] sm:leading-[65px]"
        >
          Building in stealth.
          <br />
          Empowered to disrupt.
        </h1>
        <p
          data-value="7"
          className="object max-w-[900px] mx-auto text-[#CACAD0]  text-center md:text-[28px] text-[20px] sm:leading-[36px] leading-[30px]"
        >
          Empowered by cutting-edge technology and bold ideas, we're not just
          preparing for the future—we're designing it.
        </p>

        <div data-value="3" className="object w-[155px] mx-auto mt-16">
          <PrimaryButton btnText={"Get In Touch"} scrollToId={"contact"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
