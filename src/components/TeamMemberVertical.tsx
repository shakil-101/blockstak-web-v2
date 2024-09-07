import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

interface MemberInfo {
  image: string;
  name: string;
  designation: string;
}

interface VerticalProps {
  memberInfo: MemberInfo;
}
const TeamMemberVertical: React.FC<VerticalProps> = ({ memberInfo }) => {
  return (
    <Tilt
      className="lg:col-span-3 sm:col-span-6 col-span-12 relative overflow-hidden border border-[#2B2B5A] sm:px-10 px-6 sm:py-20 py-10 rounded-lg bg-cover bg-center bg-no-repeat"
      perspective={1000}
      scale={1}
      transitionSpeed={1500}
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#8B7FF8"
      glarePosition="bottom"
      style={{ backgroundImage: "url('vertical-bg.svg')" }}
    >
      <div className="h-full flex  flex-col justify-between">
        <div>
          <Image
            src={`${memberInfo.image}`}
            width={100}
            height={100}
            alt="Team member"
            className="mx-auto rounded-full border-2 border-[#2B2B5A]"
          />
        </div>

        <div>
          <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
            {memberInfo.name}
          </h1>
          <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
            {memberInfo.designation}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default TeamMemberVertical;
