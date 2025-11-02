"use client";

import { I_middle_tab } from "@/models/interfaces";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import { useRef } from "react";
import { gsap } from "gsap";

const MiddleTab: React.FC<I_middle_tab> = ({
  animation,
  id,
  tab_text,
  tab_value,
}) => {
  const tab3Ref = useRef<HTMLDivElement | null>(null);
  const tab4Ref = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // tab3
    gsap.from(tab3Ref.current, {
      scale: 0.3,
      duration: 0.7,
      opacity: 0,
      delay: 1.2,
      ease: "bounce.out",
    });

    // tab3
    gsap.from(tab4Ref.current, {
      scale: 0.4,
      duration: 0.8,
      opacity: 0,
      delay: 1.4,
      ease: "bounce.out",
    });
  });

  return (
    <div
      key={id}
      className=" w-full lg:w-1/2 h-fit lg:h-full p-4 bg-neutral-600/10 lg:bg-white flex flex-col items-center justify-center rounded-2xl "
      ref={tab_text === "Loans funded so far" ? tab3Ref : tab4Ref}
    >
      <Lottie
        animationData={animation}
        className=" w-32 h-32 lg:w-28 lg:h-28"
      />
      <h3 className=" text-[32px] lg:text-[24px] font-semibold ">
        {tab_value}
      </h3>
      <p className=" text-[18px] lg:text-[12px] text-neutral-600 ">
        {tab_text}
      </p>
    </div>
  );
};

export default MiddleTab;
