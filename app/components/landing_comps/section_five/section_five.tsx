"use client";

import { GiStarProminences } from "react-icons/gi";
import UpgradeCard from "./upgrade_card";
import { upgrade_card_info } from "@/dev_data/upgrade_card_info";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const SectionFive = () => {
  gsap.registerPlugin(useGSAP);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card11Ref = useRef<HTMLDivElement | null>(null);
  const card22Ref = useRef<HTMLDivElement | null>(null);
  const card33Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // card11
    gsap.from(card11Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      opacity: 0,
      y: 120,
      duration: 0.6,

      ease: "bounce.out",
    });
    // card22
    gsap.from(card22Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      opacity: 0,
      y: 180,
      delay: 0.8,
      duration: 0.6,

      ease: "bounce.out",
    });
    // card33
    gsap.from(card33Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      opacity: 0,
      y: 180,
      delay: 1.1,
      duration: 0.4,
      ease: "bounce.in",
    });
  });

  return (
    <div
      ref={containerRef}
      className="w-full lg:h-[100vh] py-6 px-3 lg:px-72 flex flex-col justify-center items-center"
    >
      <section className=" flex flex-col w-full items-center ">
        <h1 className=" text-2xl font-semibold text-center">
          Subscribe for bespoke upcoming features
        </h1>
        <p className=" w-full sm:w-10/12 md:w-8/12 lg:w-7/12 text-[14px] lg:text-[10px] text-center text-neutral-600">
          Audit log exports, Stripe integration, Paypal webhooks for developers,
          and a host of comprehensive features designed to drastically enhance
          your experience
        </p>

        <div className=" w-full h-20 lg:w-8/12 hidden lg:flex justify-center items-center ">
          <i className=" text-[7px]">Rookie</i>
          <input
            type="range"
            name=""
            id=""
            min={1500}
            max={250000}
            className=" w-full h-[2px] "
          />
          <i className=" text-[7px]">Savant</i>
        </div>
      </section>
      <section
        className={`lg:h-[60%] h-fit my-5 lg:my-0 gap-4 lg:gap-7 w-full flex flex-col lg:flex-row justify-center items-center`}
      >
        {upgrade_card_info.map(
          ({ features, icon, id, price, title }, index) => (
            <UpgradeCard
              ref={
                (id === 11 && card11Ref) ||
                (id === 22 && card22Ref) ||
                card33Ref
              }
              features={features}
              icon={icon}
              id={id}
              index={index}
              price={price}
              title={title}
              key={id}
            />
          )
        )}
      </section>
    </div>
  );
};

export default SectionFive;
