"use client";

import { I_progress_circle } from "@/models/interfaces";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ProgressCircle: React.FC<I_progress_circle> = ({
  dependent_state,
  id,
  blurb,
  pending_icon,
  title,
}) => {
  const circle1Ref = useRef<HTMLDivElement | null>(null);
  const circle2Ref = useRef<HTMLDivElement | null>(null);
  const circle3Ref = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // circle 1
    gsap.from(circle1Ref.current, {
      scale: 0,
      x: -120,
      duration: 0.8,
      ease: "bounce.out",
    });
    // circle 2
    gsap.from(circle2Ref.current, {
      scale: 0,
      y: 90,
      delay: 0.7,
      duration: 0.8,
      ease: "bounce.out",
    });

    // circle 3
    gsap.from(circle3Ref.current, {
      scale: 0,
      x: 120,
      delay: 0.6,
      duration: 1.1,
      ease: "bounce.out",
    });
  });

  return (
    <div
      ref={(id === 1 && circle1Ref) || (id === 2 && circle2Ref) || circle3Ref}
      className=" w-40 h-40  bg-neutral-500/10 flex justify-center items-center flex-col mx-5 rounded-lg"
    >
      <div
        className={` rounded-full h-[50%] w-[50%] ${
          dependent_state ? " bg-green-500" : " bg-neutral-600/20"
        } flex justify-center items-center `}
      >
        {dependent_state ? (
          pending_icon
        ) : (
          <p className=" text-[12px] text-neutral-600">{id}</p>
        )}
      </div>
      <p className=" text-[8px] mt-1 ">{title}</p>
    </div>
  );
};

export default ProgressCircle;
