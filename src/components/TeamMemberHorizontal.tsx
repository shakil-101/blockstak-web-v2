import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

interface MemberInfo {
  image: string;
  name: string;
  designation: string;
}

interface HorizontalProps {
  memberInfo: MemberInfo;
}

const TeamMemberHorizontal: React.FC<HorizontalProps> = ({ memberInfo }) => {
  return (
    <Tilt
      className="col-span-2 relative overflow-hidden border border-[#2B2B5A] px-10 sm:py-20 py-10 rounded-lg bg-cover bg-center bg-no-repeat "
      perspective={1000}
      scale={1}
      transitionSpeed={1500}
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#8B7FF8"
      glarePosition="bottom"
      style={{ backgroundImage: "url('horizontal-bg.svg')" }}
    >
      <Image
        src={`${memberInfo.image}`}
        width={100}
        height={100}
        alt="Team member"
        className="rounded-full"
      />

      <h1 className="text-2xl font-medium leading-[32px] mt-10">
        {memberInfo.name}
      </h1>
      <p className="text-[#CACAD0] leading-[22px] mt-4">
        {memberInfo.designation}
      </p>
      <Image
        src="/circle-shade.svg"
        width={300}
        height={250}
        alt="Team member"
        className="absolute top-0 right-0"
      />
    </Tilt>
  );
};

export default TeamMemberHorizontal;
