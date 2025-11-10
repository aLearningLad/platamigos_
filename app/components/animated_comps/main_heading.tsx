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
    gsap.set(topTextRef.current, { autoAlpha: 1 });
    gsap.set(middleTextRef.current, { autoAlpha: 1 });
    gsap.set(bottomTextRef.current, { autoAlpha: 1 });

    // top text
    gsap.from(topTextRef.current, {
      autoAlpha: 1,
      y: 500,
      opacity: 0,
      duration: 0.8,
    });

    // middle text
    gsap.from(middleTextRef.current, {
      autoAlpha: 1,
      y: 600,
      delay: 0.9,
      opacity: 0,
      duration: 0.95,
    });

    // middle text
    gsap.from(bottomTextRef.current, {
      autoAlpha: 1,
      y: 700,
      delay: 1.2,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <span className="  font-bold text-center lg:text-start">
      <h1 ref={topTextRef} className=" text-5xl tohide">
        Send plata
      </h1>

      <h1 ref={middleTextRef} className="text-5xl tohide">
        between amigos,
      </h1>

      <h1 ref={bottomTextRef} className="text-5xl tohide">
        quickly & simply
      </h1>

      <br />
    </span>
  );
};

export default MainHeading;
