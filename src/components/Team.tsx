import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container">
        <div>
          <Image
            src="/ai-motion.png"
            width={280}
            height={280}
            alt="Ai motion"
            className="mx-auto "
          />
        </div>

        <div className="mt-40 mb-20">
          <h1 className="mb-8 max-w-[800px] mx-auto md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px] text-center ">
            Our Core Team
          </h1>
          <p className="max-w-[800px] mx-auto text-[#CACAD0] sm:text-2xl text-xl text-center sm:leading-[32px] leading-[28px]">
            A dynamic group of innovators, each bringing a
            wealth of expertise and passion to the table. With diverse
            backgrounds in technology, design, and strategy, they are the
            driving force behind our mission to create groundbreaking solutions.
          </p>
        </div>

        <div className="">
          <Image
            src="/polygon-shade2.png"
            width={1200}
            height={1000}
            alt="Team members"
            className="absolute sm:top-[10%] top-[15%] z-[-1] left-0 right-0 mx-auto md:scale-100 scale-150 "
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
                src="/ghalib.png"
                width={100}
                height={100}
                alt="Team member"
                className="rounded-full"
              />

              <h1 className="text-2xl font-medium leading-[32px] mt-10">
                Ghalib Hussaiyn
              </h1>
              <p className="text-[#CACAD0] leading-[22px] mt-4">
                Founder & CEO
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
                    src="/raghib.jpg"
                    width={100}
                    height={100}
                    alt="Team member"
                    className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                  />

                  <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                    Raghib Noor
                  </h1>
                  <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                    ML Developer
                  </p>
                  <Image
                    src="/circle-shade.svg"
                    alt="Team member"
                    width={500}
                    height={500}
                    className="absolute -bottom-20 -right-20  z-0 scale-150"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-1 col-span-2">
              <div className="col-span-2 relative overflow-hidden border border-[#2B2B5A] bg-[#0E0E1F] sm:px-10 px-6 sm:py-20 py-10 rounded-lg">
                <div className="relative z-10">
                  <Image
                    src="/asif.jpg"
                    width={100}
                    height={100}
                    alt="Team member"
                    className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                  />

                  <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                    Asif Hossain Khan
                  </h1>
                  <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                    Software Engineer
                  </p>
                  <Image
                    src="/circle-shade.svg"
                    alt="Team member"
                    width={500}
                    height={500}
                    className="absolute -top-20 -left-20  z-0 scale-150"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ====== Nayeem & Shakil */}
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 grid grid-cols-1 sm:gap-10 gap-6">
            <div className="col-span-2 relative overflow-hidden border border-[#2B2B5A] bg-[#0E0E1F] sm:px-10 px-6 sm:py-20 py-10 rounded-lg">
              <div className="relative z-10">
                <Image
                  src="/nayeem.jpg"
                  width={100}
                  height={100}
                  alt="Team member"
                  className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                />
                <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                  Nayeem
                </h1>
                <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                  Backend Developer
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
                  src="/shakil.jpg"
                  width={100}
                  height={100}
                  alt="Team member"
                  className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                />

                <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                  Md Shakil Chowdhury
                </h1>
                <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                  Frontend Developer
                </p>

                <Image
                  src="/circle-shade.svg"
                  alt="Team member"
                  width={500}
                  height={500}
                  className="absolute -bottom-20 -left-20 scale-150 z-0"
                />
              </div>
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
                  src="/fahim.jpg"
                  width={100}
                  height={100}
                  alt="Team member"
                  className="mx-auto rounded-full border-2 border-[#2B2B5A]"
                />
              </div>

              <div>
                <h1 className="text-2xl font-medium leading-[32px] text-center mt-10">
                  Fahim Murshed
                </h1>
                <p className="text-[#CACAD0] leading-[22px] text-center mt-4">
                  Technology Consultant
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
