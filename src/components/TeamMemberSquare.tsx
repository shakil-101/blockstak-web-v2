import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

interface MemberInfo {
  image: string;
  name: string;
  designation: string;
  shadePosition: string;
}

interface SquareProps {
  memberInfo: MemberInfo;
}

const TeamMemberSquare: React.FC<SquareProps> = ({ memberInfo }) => {
  return (
    <Tilt
      className="col-span-2 relative overflow-hidden border border-[#2B2B5A] bg-[#0E0E1F] sm:px-10 px-6 sm:py-20 py-10 rounded-lg wrapper-3d"
      perspective={1000}
      scale={1}
      transitionSpeed={1500}
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#8B7FF8"
      glarePosition="top"
    >
      <div className="relative z-10 inner-3d">
        <Image
          src={`${memberInfo.image}`}
          width={100}
          height={100}
          alt="Team member"
          className="mx-auto rounded-full border-2 border-[#2B2B5A]"
        />
        <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
          {memberInfo.name}
        </h1>
        <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
          {memberInfo.designation}
        </p>
      </div>
      <Image
        src="/circle-shade.svg"
        alt="Circle Shade"
        width={500}
        height={500}
        className={`absolute scale-150 z-0 ${memberInfo.shadePosition}`}
      />
    </Tilt>
  );
};

export default TeamMemberSquare;
