"use client";

import Lottie from "lottie-react";
import bizLottie from "@/public/assets/bizLottie.json";
import { section_three_info } from "@/dev_data/section_three_info";
import S3Tab from "./s3_tab";

const SectionThree = () => {
  return (
    <div className="h-[80vh] lg:pt-20 w-full py-6 lg:py-2 px-3 lg:px-72 flex flex-col justify-start items-center ">
      <section className=" w-full flex justify-center gap-12 items-end">
        <h2 className=" text-3xl font-semibold">
          Secure funding <br /> effortlessly
        </h2>

        <p className=" text-[10px] flex w-4/12 text-start ">
          Simplify loan applications and let the community decide how best to
          help you. <br /> No more hassle. <br /> No more paperwork.
        </p>
      </section>
      <section className=" w-full flex lg:justify-between lg:items-center flex-col lg:flex-row">
        <div className=" w-full lg:w-1/2 h-full">
          <Lottie animationData={bizLottie} className=" w-full h-full" />
        </div>
        <div className="w-full lg:w-1/2 h-full lg:h-1/2 flex flex-col items-start  justify-center space-y-12">
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
