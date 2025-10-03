import React from "react";
import FooterAddress from "./footer_address";
import FooterPages from "./footer_pages";
import FooterSupport from "./footer_support";
import FooterContact from "./footer_contact";

const SectionSix = () => {
  return (
    <div className=" w-full p-2 min-h-fit lg:min-h-[90vh] relative flex flex-col justify-between lg:flex-row lg:items-end rounded-lg">
      <div className=" w-full absolute top-5 lg:top-20 flex justify-center z-10 h-fit lg:h-[30vh] ">
        <div className=" w-[85%] lg:w-[55%] gap-2 h-full p-3 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-center bg-orange-500 rounded-xl lg:rounded-lg ">
          <section className=" w-full lg:w-8/12 h-full flex flex-col lg:justify-center items-center lg:items-start">
            <h1 className=" text-2xl lg:text-[16px] text-white mb-6 ">
              Get the latest updates
            </h1>
            <p className=" text-[16px] lg:text-[8px] text-white ">
              Recieve weekly newsletters on the latest developments pertaining
              to plata.migos. Stay connected and grow your network <br /> of
              amigos
            </p>
          </section>
          <button className=" w-fit px-6 text-lg lg:text-[10px] mt-5 lg:mt-0 py-2 h-fit flex justify-center items-center bg-slate-800 rounded-lg text-white ">
            Subscribe
          </button>
        </div>
      </div>
      <footer className=" w-full h-[65vh] bg-slate-700/80 flex items-end rounded-xl">
        <section className=" h-[35vh] w-full px-3 py-2 lg:px-20 lg:py-3 flex flex-row justify-center items-start gap-12">
          <FooterAddress />
          <FooterPages />
          <FooterSupport />
          <FooterContact />
        </section>
      </footer>
    </div>
  );
};

export default SectionSix;
