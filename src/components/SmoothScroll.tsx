"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: ReactNode; // This covers any valid children (elements, strings, etc.)
}
function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
export default SmoothScroll;
