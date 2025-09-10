"use client";

const Logs = () => {
  return (
    <div className=" w-full h-[40%] flex flex-col items-start p-2 lg:p-4">
      <span className=" w-full flex justify-between items-center">
        <p className=" text-[10px] font-semibold ">Recent Activity</p>

        <div className=" w-fit px-3 flex items-center text-[8px] gap-2 border-[2px] border-neutral-500/20 bg-neutral-300/10 rounded-[12px] py-1">
          <button className=" text-neutral-500 cursor-pointer ">Offers</button>
          <button className=" text-neutral-500 cursor-pointer">Requests</button>
          <button className=" text-neutral-500 cursor-pointer">Funded</button>
        </div>
      </span>

      <table className=" w-full mt-3">
        <thead>
          <tr className=" border-x-[1px] border-neutral-300">
            <th className=" text-[10px] text-neutral-500 font-normal ">
              Title
            </th>
            <th className=" text-[10px] text-neutral-500 font-normal">Desc</th>
            <th className=" text-[10px] text-neutral-500 font-normal">
              Amount
            </th>
            <th className=" text-[10px] text-neutral-500 font-normal">Type</th>
            <th className=" text-[10px] text-neutral-500 font-normal">
              Status
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Logs;
