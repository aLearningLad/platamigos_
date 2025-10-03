import { GiStarProminences } from "react-icons/gi";
import UpgradeCard from "./upgrade_card";
import { upgrade_card_info } from "@/dev_data/upgrade_card_info";

const SectionFive = () => {
  return (
    <div className="w-full lg:h-[100vh] py-6 px-3 lg:px-72 flex flex-col justify-center items-center">
      <section className=" flex flex-col w-full items-center">
        <h1 className=" text-2xl font-semibold text-center">
          Subscribe for bespoke upcoming features
        </h1>
        <p className=" w-full sm:w-10/12 md:w-8/12 lg:w-7/12 text-[14px] lg:text-[10px] text-center text-neutral-600">
          Audit log exports, Stripe integration, Paypal webhooks for developers,
          and a host of comprehensive features designed to drastically enhance
          your experience
        </p>

        <div className=" w-full h-20 lg:w-8/12 hidden lg:flex justify-center items-center ">
          <input
            type="range"
            name=""
            id=""
            min={1500}
            max={250000}
            className=" w-full h-[2px] "
          />
        </div>
      </section>
      <section
        className={`h-[60%] gap-4 lg:gap-7 w-full flex flex-col lg:flex-row justify-center items-center`}
      >
        {upgrade_card_info.map(
          ({ features, icon, id, price, title }, index) => (
            <UpgradeCard
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
