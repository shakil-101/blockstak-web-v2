import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import TeamMemberHorizontal from "./TeamMemberHorizontal";
import TeamMemberVertical from "./TeamMemberVertical";
import TeamMemberSquare from "./TeamMemberSquare";

import Tilt from "react-parallax-tilt";

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
      designation: "ML Engineer",
    },
    asif: {
      image: "/asif.jpg",
      name: "Asif Hossain Khan",
      designation: "Software Engineer",
    },
    nayeem: {
      image: "/nayeem.jpg",
      name: "Nayeem Islam",
      designation: "Technology Consultant",
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
    <div className="relative ">
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
            <TeamMemberHorizontal memberInfo={members.ghalib} />

            <div className="sm:col-span-1 col-span-2">
              <TeamMemberSquare
                memberInfo={{
                  ...members.raghib,
                  shadePosition: "-bottom-20 -right-20",
                }}
              />
            </div>

            <div className="sm:col-span-1 col-span-2">
              <TeamMemberSquare
                memberInfo={{
                  ...members.asif,
                  shadePosition: "-top-20 -left-20",
                }}
              />
            </div>
          </div>

          {/* ====== Nayeem & Shakil */}
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 grid grid-cols-1 sm:gap-10 gap-6">
            <TeamMemberSquare
              memberInfo={{
                ...members.nayeem,
                shadePosition: "top-0 left-0",
              }}
            />

            <TeamMemberSquare
              memberInfo={{
                ...members.shakil,
                shadePosition: "-bottom-20 -left-20",
              }}
            />
          </div>

          {/* ====== Fahim */}
          <TeamMemberVertical memberInfo={members.fahim} />
        </div>
      </div>
    </div>
  );
};

export default Team;
