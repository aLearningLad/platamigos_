"use client";

import Lottie from "lottie-react";
import teamLottie from "@/public/assets/teamLottie.json";
import { s4_info } from "@/dev_data/s4_info";
import S4Tab from "./s4_tab";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SectionFour = () => {
  gsap.registerPlugin(useGSAP);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subheadingRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // title
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      y: -100,
      duration: 0.9,
      opacity: 0,
    });

    // subheading
    gsap.from(subheadingRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      y: 100,
      duration: 0.9,
      opacity: 0,
    });

    // lottie
    gsap.from(lottieRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      scale: 0,
      duration: 0.9,
      delay: 0.6,
      opacity: 0,
    });
  });

  return (
    <div
      ref={containerRef}
      className=" w-full h-[100vh] lg:h-[90vh] py-6 px-3 lg:px-72 flex flex-col justify-start lg:justify-center items-center "
    >
      <div className=" w-full flex flex-col items-center gap-2">
        <h2 ref={titleRef} className=" text-4xl font-semibold text-center">
          Easy setup, simple compliance
        </h2>
        <p
          ref={subheadingRef}
          className=" text-[14px] pb-6 lg:pb-1 text-neutral-700 text-center w-full md:w-8/12 lg:w-7/12"
        >
          Simplified KYC and onboarding to make getting funded easy. Dive right
          in and engage with the community, funding or requesting loans
        </p>
      </div>

      <div className=" h-[60%] w-full flex flex-col lg:flex-row">
        <div className=" w-full lg:w-1/2 h-full flex flex-col justify-center items-end space-y-2 ">
          {s4_info.map(({ icon, id, text, title }, index) => (
            <S4Tab
              icon={icon}
              id={id}
              index={index}
              text={text}
              title={title}
              key={id}
            />
          ))}
        </div>
        <div
          ref={lottieRef}
          className=" w-full lg:w-1/2 h-full flex items-center justify-center "
        >
          <Lottie animationData={teamLottie} className=" w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
