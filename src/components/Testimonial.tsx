import Image from "next/image";
import React, { useState } from "react";

const Testimonial = () => {
  const [statements, setStatements] = useState([
    {
      name: "Ghalib Hussaiyn",
      designation: "Founder & CEO",
      message:
        " simply dummy text of the printing and. simply dummy text of the printing and.simply dummy text of the printing and.simply dummy text of the printing and.simply dummy text of the printing and.",
      image: "/ghalib.png",
    },
    {
      name: "Ghalib Hussaiyn",
      designation: "Founder & CEO",
      message:
        " simply dummy text of the printing and. simply dummy text of the printing and.simply dummy text of the printing and.simply dummy text of the printing and.simply dummy text of the printing and.",
      image: "/ghalib.png",
    },
    {
      name: "Ghalib Hussaiyn",
      designation: "Founder & CEO",
      message:
        " simply dummy text of the printing and. simply dummy text of the printing and.simply dummy text of the printing and.simply dummy text of the printing and.simply dummy text of the printing and.",
      image: "/ghalib.png",
    },
  ]);
  return (
    <div className="py-28">
      <div className="container">
        <div className="mb-20">
          <h1 className="mb-8 max-w-[800px] mx-auto md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px] text-center ">
            People love us more for our work & values
          </h1>
          <p className="max-w-[800px] mx-auto text-[#CACAD0] sm:text-2xl text-xl text-center sm:leading-[32px] leading-[28px]">
            simply dummy text of the printing and.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10">
          {statements.map((item, index) => (
            <div
              key={index}
              className="relative p-[1px] bg-gradient-to-b from-[#2B2B5A]  to-[#0A0A16] rounded-lg shadow-lg"
            >
              <div className="bg-gradient-to-b from-[#17142C]  to-[#0A0A16] rounded-lg p-8">
                <div className="flex items-center space-x-4">
                  <div>
                    <Image
                      src={item.image}
                      width={65}
                      height={65}
                      alt={`${item.name}`}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-medium leading-[32px]">
                      {item.name}
                    </h1>
                    <p className="text-[#CACAD0] leading-[22px] mt-1">
                      {item.designation}
                    </p>
                  </div>
                </div>

                <p className="text-[#CACAD0] mt-5">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
