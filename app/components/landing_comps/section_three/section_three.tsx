"use client";

import Lottie from "lottie-react";
import bizLottie from "@/public/assets/bizLottie.json";
import { section_three_info } from "@/dev_data/section_three_info";
import S3Tab from "./s3_tab";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SectionThree = () => {
  gsap.registerPlugin(useGSAP);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const blurbRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // title ref
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      opacity: 0,
      y: 100,
      duration: 1.2,
    });

    // blurb
    gsap.from(blurbRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      delay: 0.8,
      opacity: 0,
      y: 150,
      duration: 1.5,
    });

    // lottie
    gsap.from(lottieRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      opacity: 0,
      scale: 0,
      duration: 1.5,
    });
  });

  return (
    <div
      ref={containerRef}
      className="h-[80vh] lg:pt-20 w-full py-2 lg:py-2 px-3 lg:px-72 flex flex-col justify-start items-center "
    >
      <section className=" w-full flex lg:flex-row flex-col items-center justify-center gap-2 lg:gap-12 lg:items-end">
        <h2 ref={titleRef} className=" text-3xl font-semibold text-center ">
          Secure funding <br /> effortlessly
        </h2>

        <p
          ref={blurbRef}
          className="text-[18px] lg:text-[10px] flex w-11/12 lg:w-4/12 text-center lg:text-start "
        >
          Simplify loan applications and let the community decide how best to
          help you. <br /> No more hassle. <br /> No more paperwork.
        </p>
      </section>
      <section className=" w-full flex lg:justify-between lg:items-center flex-col lg:flex-row">
        <div ref={lottieRef} className=" w-full lg:w-1/2 h-full">
          <Lottie animationData={bizLottie} className=" w-full h-full" />
        </div>
        <div className="w-full lg:w-1/2 h-full lg:h-1/2 flex flex-row lg:flex-col items-start pt-4  justify-center space-y-12">
          {section_three_info.map(({ count, icon, id, text }, index) => (
            <S3Tab
              count={count}
              icon={icon}
              id={id}
              text={text}
              key={id}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
