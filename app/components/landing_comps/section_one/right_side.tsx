"use client";

import TopJuttingIn from "../../animated_comps/top_jutting_in";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import LowerJuttingIn from "../../animated_comps/lower_jutting_in";
import MainBlock from "../../animated_comps/main_block";

const RightSide = () => {
  gsap.registerPlugin(useGSAP);

  const topJuttingRef = useRef<HTMLDivElement>(null);
  const lowerJuttingRef = useRef<HTMLDivElement>(null);
  const mainBlockRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // for topjutting
      gsap.from(topJuttingRef.current, {
        x: 600,
        delay: 1,
        duration: 2.2,
        y: 200,
        ease: "bounce.out",
      });

      // for lowerjutting
      gsap.from(lowerJuttingRef.current, {
        scale: 0,
        duration: 1.2,
        ease: "bounce.out",
      });

      // for main block
      gsap.from(mainBlockRef.current, {
        scale: 0,
        delay: 0.8,
        duration: 1.7,
        ease: "bounce.out",
      });
    },
    { scope: topJuttingRef }
  );

  return (
    <div className=" w-full lg:w-5/12 lg:pl-6 pt-5 items-center hidden lg:flex relative h-[40vh] lg:h-[55vh] ">
      {/* top block jutting in */}
      <TopJuttingIn ref={topJuttingRef} />
      {/* top block jutting in */}

      {/* main block */}
      <MainBlock ref={mainBlockRef} />
      {/* main block */}

      {/* lower block jutting in */}
      <LowerJuttingIn ref={lowerJuttingRef} />
      {/* lower block jutting in */}
    </div>
  );
};

export default RightSide;
