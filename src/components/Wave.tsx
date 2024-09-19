import Image from "next/image";
import React from "react";

const Wave = () => {
  return (
    <div className="">
      <div
        className="max-w-[1900px] w-full xl:h-[400px] md:h-[300px] h-[250px] mx-auto bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('wave2.png')",
        }}
      ></div>
    </div>
  );
};

export default Wave;
