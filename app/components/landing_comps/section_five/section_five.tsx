import { GiStarProminences } from "react-icons/gi";

const SectionFive = () => {
  return (
    <div className="w-full h-[100vh] py-6 px-3 lg:px-72 flex flex-col justify-center items-center">
      <section className=" flex flex-col w-full items-center">
        <h1 className=" text-2xl font-semibold">
          Subscribe for bespoke upcoming features
        </h1>
        <p className=" w-full sm:w-10/12 md:w-8/12 lg:w-7/12 text-[10px] text-center text-neutral-600">
          Audit log exports, Stripe integration, Paypal webhooks for developers,
          and a host of comprehensive features designed to drastically enhance
          your experience
        </p>

        <div className=" w-full h-20 lg:w-8/12 flex justify-center items-center ">
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
      <section className=" h-[60%] gap-4 lg:gap-7 w-full flex flex-col lg:flex-row justify-center items-center border-2 border-black">
        <div className=" w-full lg:w-1/3 h-[95%] bg-orange-600/10 rounded-3xl flex flex-col items-center"></div>
        <div className=" w-full lg:w-1/3 h-full bg-black text-white rounded-3xl flex flex-col items-start p-3">
          <p className=" text-[12px] italic">Comprehensive</p>
          <div className=" w-full flex ">
            <span>
              <p className=" text-[18px]">R99</p>
            </span>
            <span className=" flex flex-col items-start justify-center pl-2">
              <p className=" text-[8px] ">Per month</p>
              <p className=" text-[6px] ">discounts available</p>
            </span>
          </div>
          <div className=" w-[20px] h-[2px] border-b-2 border-white rounded-full mt-6 " />
          <div className=" w-full h-full flex flex-col items-start justify-around py-2">
            <span className=" flex w-full gap-1 justify-start items-center ">
              <GiStarProminences size={18} />
              <p className=" text-[8px]">Everything in basic</p>
            </span>
            <span className=" flex w-full gap-1 justify-start items-center h-fit ">
              <GiStarProminences size={18} />
              <p className=" text-[8px]">
                Priority access to upcoming features. Receive notifications and
                obtain free tokens
              </p>
            </span>
            <span className=" flex w-full gap-1 justify-start items-center ">
              <GiStarProminences size={18} />
              <p className=" text-[8px]">
                Tokenized transactions and preferential loan listings
              </p>
            </span>
            <span className=" flex w-full gap-1 justify-start items-center ">
              <GiStarProminences size={18} />
              <p className=" text-[8px]">
                Enterprise features. Seats for up to 25 team members
              </p>
            </span>
          </div>
        </div>
        <div className=" w-full lg:w-1/3 h-[95%] bg-teal-600/10 rounded-3xl flex flex-col items-center"></div>
      </section>
    </div>
  );
};

export default SectionFive;
