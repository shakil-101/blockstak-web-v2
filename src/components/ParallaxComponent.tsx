import { useEffect, useRef } from "react";

const ParallaxComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current
          .querySelectorAll<HTMLElement>(".object")
          .forEach((move) => {
            const moving_value = move.getAttribute("data-value");
            const x = (e.clientX * Number(moving_value)) / 250;
            const y = (e.clientY * Number(moving_value)) / 250;

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

  return (
    <div className="container2" ref={containerRef}>
      <h2 className="object" data-value="3">
        Space Background
      </h2>
      <img src="/shakil.jpg" className="object" data-value="5" alt="Image 1" />
      <img src="/asif.jpg" className="object" data-value="-2" alt="Image 2" />
    </div>
  );
};

export default ParallaxComponent;
