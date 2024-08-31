import React from "react";

interface ButtonProps {
  btnText: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ btnText }) => {
  return (
    <div className="w-full">
      <button className="send-btn-shadow w-full px-5 py-4 bg-[#6f61ee] border border-[#6f61ee] hover:border-white hover:bg-white hover:text-black rounded-xl duration-300">
        {btnText}
      </button>
    </div>
  );
};

export default PrimaryButton;
