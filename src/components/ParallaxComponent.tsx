import Image from "next/image";
import { useEffect, useRef } from "react";

const ParallaxComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.querySelectorAll(".object").forEach((move) => {
          const moving_value = move.getAttribute("data-value");
          const x = (e.clientX * Number(moving_value)) / 200;
          const y = (e.clientY * Number(moving_value)) / 200;

          (
            move as HTMLElement
          ).style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="container2" ref={containerRef}>
        <h2 className="object" data-value="3">
          Space Background
        </h2>
        <div className="flex items-center">
          <img
            src="/shakil.jpg"
            className="object w-40 h-40"
            data-value="5"
            alt="Image 1"
          />
        </div>
        <Image
          src="/polygon-shade2.png"
          width={1200}
          height={700}
          alt="Team members"
          data-value="7"
          className="object absolute top-40 left-0 right-0 mx-auto z-0 sm:scale-100 scale-150"
        />
      </div>
    </div>
  );
};

export default ParallaxComponent;
