import Image from "next/image";
import React, { useState } from "react";
import BubbleButton from "./BubbleButton";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    toggleMenu();

    const element = document.getElementById("contact");
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed sm:top-10 w-full z-50 sm:px-10">
      <nav className="mx-auto max-w-[1400px] bg-gradient-to-r from-[#1f1f36]/80 to-[#101023]/80 backdrop-blur-md shadow-lg sm:rounded-full">
        <div className=" px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href={`/`}>
                <Image
                  className={`duration-700 ease-in-out w-[150px] sm:w-[150px] md:w-[200px]`}
                  src="/blockstak-white.svg"
                  alt="Blockstak Logo"
                  width={200}
                  height={200}
                  priority
                />
              </Link>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              <Link
                href={`/`}
                className="text-[#CACAD0] hover:text-[#796BF8] text-lg font-medium"
              >
                Home
              </Link>
              <Link
                href={`/gen-ai`}
                className="text-[#CACAD0] hover:text-[#796BF8] text-lg font-medium"
              >
                Gen AI
              </Link>
              <div onClick={handleClick}>
                <BubbleButton />
              </div>
            </div>
            <div className="sm:hidden">
              {/* <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isOpen ? "Close" : "Open"}
                {isOpen ? (
                  <XIcon className="w-8 h-8" />
                ) : (
                  <MenuIcon className="w-8 h-8" />
                )}
              </button> */}
              <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col space-y-4 pb-4 px-8">
              <Link
                href={`/`}
                className="text-[#CACAD0] hover:text-[#796BF8] text-lg font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href={`/`}
                className="text-[#CACAD0] hover:text-[#796BF8] text-lg font-medium"
                onClick={toggleMenu}
              >
                Gen AI
              </Link>
              <div onClick={handleClick}>
                <BubbleButton />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
