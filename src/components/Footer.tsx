import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import ContactForm from "./ContactForm";

const Footer = () => {
  type formDataType = {
    name: string;
    email: string;
    message: string;
  };

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    message: "",
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current
          .querySelectorAll<HTMLElement>(".object")
          .forEach((move) => {
            const moving_value = move.getAttribute("data-value");
            const x = (e.clientX * Number(moving_value)) / 150;
            const y = (e.clientY * Number(moving_value)) / 150;

            move.style.transition = "transform 0.1s ease-out"; // Smooth transition
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
      }
    };

    const throttledMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => handleMouseMove(e));
    };

    document.addEventListener("mousemove", throttledMouseMove);

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const submitForm = async (e: any) => {
    e.preventDefault();

    console.log("req data --: ", formData);
  };

  return (
    <div
      ref={containerRef}
      className="pt-28 bg-[#070710] relative overflow-hidden footer-wrapper"
    >
      <Image
        src="/polygon-shade2.png"
        width={1200}
        height={700}
        alt="Team members"
        data-value="10"
        className="object absolute top-40 left-0 right-0 mx-auto z-0 sm:scale-100 scale-150"
      />
      <div className="container relative z-10">
        <div className="mb-20">
          <h1 className="mb-8 max-w-[800px] mx-auto md:text-[64px] sm:text-[50px] xs:text-[40px] text-[35px] font-medium sm:leading-[72px] xs:leading-[55px] leading-[45px] text-center ">
            Connect with Us
          </h1>
          <p className="max-w-[800px] mx-auto text-[#CACAD0] sm:text-2xl text-xl text-center sm:leading-[32px] leading-[28px]">
            Reach out to our team and let's start a conversation. Your next
            great idea could be just a message away.
          </p>
        </div>

        {/* ====== contact form ===== */}
        <div>
          <ContactForm />
          {/* <form
            onSubmit={submitForm}
            className="grid lg:grid-cols-2 grid-cols-1 gap-8"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
              <div>
                <input
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 py-4 bg-transparent border border-[#ffffff3c] focus:outline-none focus:border-[#8B7FF8]  rounded-xl  placeholder-[#CACAD0]"
                />
              </div>
              <div>
                <input
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-4 bg-transparent border border-[#ffffff3c] focus:outline-none focus:border-[#8B7FF8]  rounded-xl  placeholder-[#CACAD0]"
                />
              </div>
            </div>

            <div className="sm:flex items-center gap-8">
              <div className="w-full">
                <input
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  value={formData.message}
                  type="text"
                  placeholder="Message"
                  className="w-full px-5 py-4 bg-transparent border border-[#ffffff3c] focus:outline-none focus:border-[#8B7FF8]  rounded-xl  placeholder-[#CACAD0]"
                />
              </div>

              <div className="sm:w-[90px] w-full sm:mt-0 mt-8">
                <PrimaryButton btnText={"Send"} />
              </div>
            </div>
          </form> */}
        </div>

        {/* ===== quick links & address  */}

        <div className="grid grid-cols-12 sm:gap-8 gap-16 py-36">
          <div className="lg:col-span-3 sm:col-span-6 col-span-12  order-1">
            <h1 className="max-w-[264px] text-[44px] leading-[57px]">
              We build to disrupt.
            </h1>
          </div>

          <div className="sm:col-span-5 col-span-12 text-[#CACAD0] flex items-end lg:order-2 order-3">
            <div>
              <h1 className="font-bold mb-4">Quick Links</h1>
              <ul className="list-disc list-inside flex gap-5">
                <li>
                  <Link href={`/`} className="hover:text-[#796BF8]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={`/gen-ai`} className="hover:text-[#796BF8]">
                    GenAI
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:col-span-4 col-span-12 text-[#CACAD0] lg:order-3 order-2">
            <h1 className="font-bold mb-4">Contact</h1>
            <div>
              <a href={`mailto: support@blockstak.ai`} className="underline">
                support@blockstak.ai
              </a>
            </div>
            <p className="my-4">House 648, Road-9 Mirpur DOHS</p>
            <p>
              ^412 Spring Meadow CT Sans Jose <br /> San Fresco Bay Area
              California
            </p>
          </div>
        </div>
        <Image
          src="/blockstak-footer.svg"
          width={1150}
          height={800}
          alt="Team members"
          className="mx-auto relative z-10"
        />
      </div>
    </div>
  );
};

export default Footer;
