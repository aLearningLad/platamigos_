import S1TOP from "./s1_top";
import S1BOTTOM from "./s1_bottom";

const SectionTwo = () => {
  return (
    <div className=" h-[100vh] w-full py-6 lg:py-2 border-2 px-3 lg:px-40 xl:px-52 border-red-500 flex flex-col items-center ">
      <p className=" text-[10px] font-bold  ">Easy Funding</p>
      <h1 className=" text-3xl font-bold ">Real time loan updates</h1>
      <p className=" text-[12px] lg:text-[10px] lg:w-6/12 mt-2 lg:mt-3 mb-3 text-center ">
        Request new loans and secure funding for ideas, projects and commitments
        most important to you. Compare offers and pick the best one. Interest
        rates, payment term and monthly instalments, all under your control
      </p>

      {/* tabs in grid section */}
      <section className=" w-full h-[60vh] lg:h-[55%] flex flex-col border-4 border-white ">
        <S1TOP />
        <S1BOTTOM />
      </section>
    </div>
  );
};

export default SectionTwo;
