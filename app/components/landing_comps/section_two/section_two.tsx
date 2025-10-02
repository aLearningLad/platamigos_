"use client";

import S1TOP from "./s1_top";
import S1BOTTOM from "./s1_bottom";
import { GiJusticeStar } from "react-icons/gi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionTwo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const contRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);
  const div3Ref = useRef<HTMLDivElement | null>(null);
  const bdiv1Ref = useRef<HTMLDivElement | null>(null);
  const bdiv2Ref = useRef<HTMLDivElement | null>(null);
  const bdiv3Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // titleRef animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%", // tweak as needed
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.7,
    });

    // s1 top
    gsap.from(".s1Ref", {
      stagger: 0.7,
      scale: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    // div1
    gsap.from(div1Ref.current, {
      scale: 0,
      delay: 1.5,
      duration: 1.2,
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
    });

    // div2
    gsap.from(div2Ref.current, {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      ease: "bounce.out",
    });

    // div3
    gsap.from(div3Ref.current, {
      scale: 0,
      duration: 0.9,
      delay: 1.3,
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
    });

    // bdiv1
    gsap.from(bdiv1Ref.current, {
      x: -150,
      opacity: 0,
      delay: 1.5,
      duration: 0.9,
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
    });

    // bdiv2
    gsap.from(bdiv2Ref.current, {
      x: -400,
      opacity: 0,
      delay: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
    });

    // bdiv3
    gsap.from(bdiv3Ref.current, {
      x: -550,
      duration: 1.2,
      scrollTrigger: {
        trigger: contRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none restart reverse",
      },
      ease: "bounce.out",
    });
  });

  return (
    <div
      ref={contRef}
      className=" h-[60vh] lg:h-[100vh] w-full pt-12 lg:py-2 px-3 lg:px-40 xl:px-52 flex flex-col items-center "
    >
      <p ref={titleRef} className=" text-[10px] font-bold hide-on-se mb-2  ">
        Easy Funding
      </p>
      <h1 className=" text-3xl font-bold ">Real time loan updates</h1>
      <p className=" flex sm:hidden text-[18px] text-center ">
        Request new loans and secure funding for ideas, projects and commitments
        most important to you.
      </p>
      <p className="text-[18px] lg:text-[10px] lg:w-6/12 mt-2 lg:mt-3 mb-3 text-center hidden md:flex ">
        Request new loans and secure funding for ideas, projects and commitments
        most important to you. Compare offers and pick the best one. Interest
        rates, payment term and monthly instalments, all under your control
      </p>

      {/* tabs in grid section */}
      <section className=" w-full pb-12 lg:pt-0 h-[50vh] lg:h-[55%] hidden lg:flex flex-col">
        <S1TOP div1Ref={div1Ref} div2Ref={div2Ref} div3Ref={div3Ref} />
        <S1BOTTOM bdiv1Ref={bdiv1Ref} bdiv2Ref={bdiv2Ref} bdiv3Ref={bdiv3Ref} />
      </section>

      {/* lower info bits */}
      <div className=" w-full mt-12 h-[30vh] lg:h-[35%] flex flex-col lg:flex-row gap-8 lg:gap-8 ">
        {/* left side */}
        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full flex justify-start ">
          <div className=" w-fit px-1 flex h-full items-start  ">
            <GiJusticeStar size={16} className=" text-cyan-500" />
          </div>
          <div className=" w-full flex flex-col justify-start items-start pl-1">
            <h3 className=" text-[14px] font-bold ">
              Secure funding & scale, pay off <br /> debt or restructure
            </h3>
            <p className=" text-[14px] lg:text-[10px] font-bold text-neutral-600 w-full lg:w-7/12 ">
              CHoose where your new money goes. Vet fees, groceries, utilities,
              car trouble, or even just a vacation budget, you decide what,
              where, and how your money is spent
            </p>
          </div>
        </div>

        {/* rightt side */}
        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full flex justify-start ">
          <div className=" w-fit px-1 flex h-full items-start  ">
            <GiJusticeStar size={16} className=" text-cyan-500" />
          </div>
          <div className=" w-full flex flex-col justify-start items-start pl-1">
            <h3 className=" text-[14px] font-bold ">Allocate capital</h3>
            <p className=" text-[14px] lg:text-[10px] font-bold text-neutral-600 w-full lg:w-7/12">
              Easily request a loan, compare funding offers and decide how and
              when to pay back your loan. Simplified and made for amigos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
