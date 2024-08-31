import React, { useState } from "react";
import Lottie from "lottie-react";

import Service1 from "../../public/service1.json";
import Service2 from "../../public/service2.json";
import Service3 from "../../public/service3.json";
import Image from "next/image";

const Services = () => {
  return (
    <div className="pb-20 bg-gradient-to-b from-[#0e0e1f]  to-[#0a0a16] ">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-x-10 gap-y-20">
        {/* ===== service 1 */}
        <div className="relative max-w-[400px] mx-auto p-[1px] bg-gradient-to-b from-[#8B7FF8]  to-[#524b921f] rounded-lg shadow-lg">
          <div className="service-card bg-[#0E0E1F] h-full rounded-lg p-10 text-center ">
            <div className="flex justify-center mb-10">
              <div className="">
                {/* <Lottie className={``} animationData={Service1} loop={true} /> */}
                <Image
                  className={``}
                  src="/service1.svg"
                  alt="Service"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Product Development
            </h3>
            <p className="text-gray-400 pb-10">
              simply dummy text of the printing and typesetting industry. simply
              dummy text of the printing and typesetting industry. simply dummy
              text of the printing and typesetting industry. simply dummy text
              of the printing and typesetting industry. 
            </p>
            <div className="absolute w-full left-0 -bottom-5">
              <button className="mx-auto bg-[#1C1939] px-6 py-2 rounded-full btn-box-shadow border-2 border-[#A197FF33]">
                Product Development
              </button>
            </div>
          </div>
        </div>
        {/* ===== service 2 */}
        <div className="relative max-w-[400px] mx-auto p-[1px] bg-gradient-to-b from-[#8B7FF8]  to-[#524b921f] rounded-lg">
          <div className="service-card bg-[#0E0E1F] h-full rounded-lg p-10 shadow-lg text-center">
            <div className="flex justify-center mb-10">
              <div className="">
                {/* <Lottie className={``} animationData={Service2} loop={true} /> */}
                <Image
                  className={``}
                  src="/service2.svg"
                  alt="Service"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-6">AI/ML</h3>
            <p className="text-gray-400  pb-10">
              simply dummy text of the printing and typesetting industry. simply
              dummy text of the printing and typesetting industry. simply dummy
              text of the printing and typesetting industry. simply dummy text
              of the printing and typesetting industry. 
            </p>
            <div className="absolute w-full left-0 -bottom-5">
              <button className="mx-auto bg-[#1C1939] px-6 py-2 rounded-full btn-box-shadow border-2 border-[#A197FF33]">
                Product Development
              </button>
            </div>
          </div>
        </div>
        {/* ===== service 3 */}
        <div className="relative max-w-[400px] mx-auto p-[1px] bg-gradient-to-b from-[#8B7FF8]  to-[#524b921f] rounded-lg">
          <div className="service-card bg-[#0E0E1F] h-full rounded-lg p-10 shadow-lg text-center">
            <div className="flex justify-center mb-10">
              <div className=" ">
                {/* <Lottie className={``} animationData={Service3} loop={true} /> */}
                <Image
                  className={``}
                  src="/service3.svg"
                  alt="Service"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Blockchain
            </h3>
            <p className="text-gray-400 pb-10">
              simply dummy text of the printing and typesetting industry. simply
              dummy text of the printing and typesetting industry. simply dummy
              text of the printing and typesetting industry. simply dummy text
              of the printing and typesetting industry. 
            </p>
            <div className="absolute w-full left-0 -bottom-5">
              <button className="mx-auto bg-[#1C1939] px-6 py-2 rounded-full btn-box-shadow border-2 border-[#A197FF33]">
                Product Development
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
