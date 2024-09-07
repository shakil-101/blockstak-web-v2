import React, { useState } from "react";
import Lottie from "lottie-react";

import Service1 from "../../public/service1.json";
import Service2 from "../../public/service2.json";
import Service3 from "../../public/service3.json";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const Services = () => {
  const [services, setServices] = useState([
    {
      icon: "/service1.svg",
      name: "Fueling Innovation: MVPs for Silicon Valley Startups",
      description:
        "We specialize in turning visionary ideas into reality. By partnering with early-stage Silicon Valley startups, we build Minimum Viable Products (MVPs) that get your innovation to market faster. Whether you're refining your concept or preparing for your next funding round, our expert team delivers scalable, high-impact solutions that drive your success from day one. Let's create the future together.",
      buttonText: "Product Development",
      buttonLink: "/",
    },
    {
      icon: "/service2.svg",
      name: "Pioneering AI/ML Solutions with a Focus on Generative AI",
      description:
        "We are at the forefront of AI and machine learning innovation, creating products and solutions that harness the power of generative AI. Our mission is to push the boundaries of what's possible, delivering cutting-edge technologies that transform industries and empower businesses. From concept to deployment, we specialize in crafting intelligent systems that not only solve problems but redefine what's achievable in the world of AI. Join us as we build the future of intelligent technology.",
      buttonText: "AI/ML",
      buttonLink: "/",
    },
    {
      icon: "/service3.svg",
      name: "Exploring the Potential of Blockchain: Real-World Solutions in Progress",
      description:
        "We're passionate about the transformative power of blockchain technology. Our team is dedicated to exploring its vast potential, investing our time and resources into research and innovation. We're committed to discovering practical, real-life applications that can revolutionize industries and drive meaningful change. As we delve into the possibilities, we're laying the groundwork for the future of decentralized solutions. Stay tuned as we turn visionary ideas into reality.",
      buttonText: "Blockchain",
      buttonLink: "/",
    },
  ]);
  return (
    <div className="pb-20 bg-gradient-to-b from-[#0e0e1f]  to-[#0a0a16] ">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-x-10 gap-y-20">
        {/* {services.map((service, index) => (
          <Tilt
            key={index}
            className="background-stripes parallax-effect tilt-container"
            perspective={1000}
            scale={1}
            transitionSpeed={1500}
            glareEnable={false}
            glareMaxOpacity={0.5}
            glareColor="#0E0E1F"
            glarePosition="bottom"
          >
            <div className="relative max-w-[400px] mx-auto p-[1px] bg-gradient-to-b from-[#8B7FF8]  to-[#524b921f] rounded-lg shadow-lg">
              <div className="service-card bg-[#0E0E1F] h-full rounded-lg p-10 text-center ">
                <div className="flex justify-center mb-10">
                  <div className="">
                    <Image
                      className={``}
                      src={`${service.icon}`}
                      alt="Service"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-6">
                  {service.name}
                </h3>
                <p className="text-gray-400 pb-10">{service.description}</p>
                <div className="absolute w-full left-0 -bottom-5">
                  <button className="mx-auto min-w-48 bg-[#1C1939] px-6 py-2 rounded-full btn-box-shadow border-2 border-[#A197FF33]">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
        ))} */}

        {services.map((service, index) => (
          <div
            key={index}
            className="relative max-w-[400px] mx-auto p-[1px]  rounded-lg shadow-lg"
          >
            <Tilt
              className="relative service-card bg-[#0E0E1F] h-full rounded-lg px-10 py-6 text-center border border-[#8b7ff829]"
              key={index}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1}
              glareColor="#8B7FF8"
              glarePosition="top"
            >
              <div className="service-card-inner ">
                <div className="flex justify-center my-10">
                  <div className="">
                    <Image
                      className={``}
                      src={`${service.icon}`}
                      alt="Service"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-6">
                  {service.name}
                </h3>
                <p className="text-gray-400 pb-10">{service.description}</p>
              </div>
              <div className="absolute w-full left-0 -bottom-5">
                <button className="mx-auto min-w-48 bg-[#1C1939] px-6 py-2 rounded-full btn-box-shadow border-2 border-[#A197FF33]">
                  {service.buttonText}
                </button>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
