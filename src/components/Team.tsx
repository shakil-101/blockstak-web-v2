import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const Team = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const [scale, setScale] = useState(0);
  const [members, setMembers] = useState({
    ghalib: {
      image: "/ghalib.png",
      name: "Ghalib Hussaiyn",
      designation: "Founder & CEO",
    },
    raghib: {
      image: "/raghib.jpg",
      name: "Raghib Noor",
      designation: "ML Developer",
    },
    asif: {
      image: "/asif.jpg",
      name: "Asif Hossain Khan",
      designation: "Software Engineer",
    },
    nayeem: {
      image: "/nayeem.jpg",
      name: "Nayeem Islam",
      designation: " Backend Developer",
    },
    shakil: {
      image: "/shakil.jpg",
      name: "Md Shakil Chowdhury",
      designation: "Frontend Developer",
    },
    fahim: {
      image: "/fahim.jpg",
      name: "Fahim Murshed",
      designation: "Technology Consultant",
    },
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let newScale = 1 + scrollPosition / 1000;

    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="container">
        <div ref={ref}>
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/ai-motion.png"
              width={280}
              height={280}
              alt="Ai motion"
              className="mx-auto"
            />
          </motion.div>
        </div>

        <div className="mt-40 mb-20">
          <h1 className="mb-8 max-w-[800px] mx-auto md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px] text-center ">
            Our Core Team
          </h1>
          <p className="max-w-[800px] mx-auto text-[#CACAD0] sm:text-2xl text-xl text-center sm:leading-[32px] leading-[28px]">
            A dynamic group of innovators, each bringing a wealth of expertise
            and passion to the table. With diverse backgrounds in technology,
            design, and strategy, they are the driving force behind our mission
            to create groundbreaking solutions.
          </p>
        </div>

        <div className="">
          {/* <Image
            src="/polygon-shade2.png"
            width={1200}
            height={1000}
            alt="Team members"
            className="absolute sm:top-[10%] top-[15%] z-[-1] left-0 right-0 mx-auto md:scale-100 scale-150 "
            style={{ transform: `scale(${scale})` }}
          /> */}
          <Image
            src="/polygon-shade2.png"
            width={500}
            height={400}
            alt="Team members"
            className="absolute top-[30%] z-[-1] left-0 right-0 mx-auto transition-transform duration-500 ease-out"
            style={{ transform: `scale(${scale})` }}
          />
        </div>

        <div className="grid grid-cols-12 sm:gap-10 gap-6">
          {/* ======= Ghalib & Raghib & Asif */}
          <div className="lg:col-span-6 col-span-12 grid grid-cols-2 sm:gap-10 gap-6">
            <div
              className="col-span-2 relative overflow-hidden border border-[#2B2B5A] px-10 sm:py-20 py-10 rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('horizontal-bg.svg')" }}
            >
              <Image
                src={`${members.ghalib.image}`}
                width={100}
                height={100}
                alt="Team member"
                className="rounded-full"
              />

              <h1 className="text-2xl font-medium leading-[32px] mt-10">
                {members.ghalib.name}
              </h1>
              <p className="text-[#CACAD0] leading-[22px] mt-4">
                {members.ghalib.designation}
              </p>
              <Image
                src="/circle-shade.svg"
                width={300}
                height={250}
                alt="Team member"
                className="absolute top-0 right-0"
              />
            </div>
            <div className="sm:col-span-1 col-span-2">
              <div className="col-span-2 relative overflow-hidden border border-[#2B2B5A] bg-[#0E0E1F] sm:px-10 px-6 sm:py-20 py-10 rounded-lg">
                <div className="relative z-10">
                  <Image
                    src={`${members.raghib.image}`}
                    width={100}
                    height={100}
                    alt="Team member"
                    className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                  />

                  <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                    {members.raghib.name}
                  </h1>
                  <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                    {members.raghib.designation}
                  </p>
                </div>
                <Image
                  src="/circle-shade.svg"
                  alt="Team member"
                  width={500}
                  height={500}
                  className="absolute -bottom-20 -right-20  z-0 scale-125"
                />
              </div>
            </div>
            <div className="sm:col-span-1 col-span-2">
              <div className="col-span-2 relative overflow-hidden border border-[#2B2B5A] bg-[#0E0E1F] sm:px-10 px-6 sm:py-20 py-10 rounded-lg">
                <div className="relative z-10">
                  <Image
                    src={`${members.asif.image}`}
                    width={100}
                    height={100}
                    alt="Team member"
                    className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                  />

                  <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                    {members.asif.name}
                  </h1>
                  <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                    {members.asif.designation}
                  </p>
                </div>
                <Image
                  src="/circle-shade.svg"
                  alt="Team member"
                  width={500}
                  height={500}
                  className="absolute -top-20 -left-20  z-0 scale-125"
                />
              </div>
            </div>
          </div>

          {/* ====== Nayeem & Shakil */}
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 grid grid-cols-1 sm:gap-10 gap-6">
            <div className="col-span-2 relative overflow-hidden border border-[#2B2B5A] bg-[#0E0E1F] sm:px-10 px-6 sm:py-20 py-10 rounded-lg">
              <div className="relative z-10">
                <Image
                  src={`${members.nayeem.image}`}
                  width={100}
                  height={100}
                  alt="Team member"
                  className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                />
                <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                  {members.nayeem.name}
                </h1>
                <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                  {members.nayeem.designation}
                </p>
              </div>
              <Image
                src="/circle-shade.svg"
                alt="Circle Shade"
                width={500}
                height={500}
                className="absolute top-0 left-0 scale-150 z-0"
              />
            </div>

            <div className="col-span-2 relative overflow-hidden border border-[#2B2B5A] bg-[#0E0E1F] sm:px-10 px-6 sm:py-20 py-10 rounded-lg">
              <div className="relative z-10">
                <Image
                  src={`${members.shakil.image}`}
                  width={100}
                  height={100}
                  alt="Team member"
                  className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                />

                <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                  {members.shakil.name}
                </h1>
                <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                  {members.shakil.designation}
                </p>
              </div>
              <Image
                src="/circle-shade.svg"
                alt="Team member"
                width={500}
                height={500}
                className="absolute -bottom-20 -left-20 scale-125 z-0"
              />
            </div>
          </div>

          {/* ====== Fahim */}
          <div
            className="lg:col-span-3 sm:col-span-6 col-span-12 relative overflow-hidden border border-[#2B2B5A] sm:px-10 px-6 sm:py-20 py-10 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('vertical-bg.svg')" }}
          >
            <div className="h-full flex  flex-col justify-between">
              <div>
                <Image
                  src={`${members.fahim.image}`}
                  width={100}
                  height={100}
                  alt="Team member"
                  className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                />
              </div>

              <div>
                <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                  {members.fahim.name}
                </h1>
                <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                  {members.fahim.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
