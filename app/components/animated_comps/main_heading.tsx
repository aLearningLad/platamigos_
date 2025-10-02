"use client";

import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const MainHeading = () => {
  gsap.registerPlugin(useGSAP);

  const topTextRef = useRef<HTMLDivElement>(null);
  const middleTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // top text
    gsap.from(topTextRef.current, {
      y: 500,
      opacity: 0,
      duration: 0.8,
    });

    // middle text
    gsap.from(middleTextRef.current, {
      y: 600,
      delay: 0.9,
      opacity: 0,
      duration: 0.95,
    });

    // middle text
    gsap.from(bottomTextRef.current, {
      y: 700,
      delay: 1.2,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <span className="  font-bold text-center lg:text-start">
      <h1 ref={topTextRef} className="text-4xl">
        Send plata
      </h1>

      <h1 ref={middleTextRef} className="text-4xl">
        between amigos,
      </h1>

      <h1 ref={bottomTextRef} className="text-4xl">
        quick & easy
      </h1>

      <br />
    </span>
  );
};

export default MainHeading;
