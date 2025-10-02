"use client";

import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const MainHeading = () => {
  gsap.registerPlugin(useGSAP);

  const topTextRef = useRef<HTMLDivElement>(null);
  const middleTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  return (
    <span className="  font-bold text-center lg:text-start">
      <h1 className="text-4xl">Send plata</h1>
      <br />
      <h1 className="text-4xl">between amigos,</h1>

      <h1 className="text-4xl">quick & easy</h1>

      <br />
    </span>
  );
};

export default MainHeading;
