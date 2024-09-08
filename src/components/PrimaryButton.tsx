import React from "react";

interface ButtonProps {
  btnText: string;
  scrollToId?: string; // Optional prop to specify the ID of the section to scroll to
}

const PrimaryButton: React.FC<ButtonProps> = ({ btnText, scrollToId }) => {
  const handleClick = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        const offset = 100; // Adjust the offset to prevent the form from aligning at the very top
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="send-btn-shadow w-44 px-6 py-4 bg-[#6f61ee] border border-[#6f61ee] hover:border-white hover:bg-white hover:text-black rounded-xl duration-300"
      >
        {btnText}
      </button>
    </div>
  );
};

export default PrimaryButton;
