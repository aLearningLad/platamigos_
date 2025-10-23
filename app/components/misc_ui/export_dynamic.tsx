"use client";

import Lottie from "lottie-react";
import { SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import lottieLoading from "../../../public/assets/lottieloading.json";

const ExportDynamic = (set_is_modal: {
  set_is_modal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const handleExport = () => {
    set_is_loading(true);

    try {
      toast.success("Done!");
    } catch (error) {
      toast.error("Unable to compile your data. Please try again later");
      console.error("Unable to fetch user data: ", error);
    }
  };

  return (
    <>
      {is_loading ? (
        <div className=" w-full h-full flex flex-col items-center justify-center text-center gap-3 ">
          <p className=" ">Just a moment</p>
          <p className=" text-[12px]">
            Hang tight while we gather your <i>Plata.Migos</i> data...
          </p>
          <Lottie animationData={lottieLoading} className=" w-32 h-32" />
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col items-center justify-center text-center">
          <h3 className=" font-semibold">
            {"You're"} about to download your data
          </h3>
          <p className=" text-[12px]">
            It will be saved as a JSON file on your device
          </p>

          <button
            onClick={handleExport}
            className=" w-full cursor-pointer mt-12 mb-4 sm:w-10/12 md:w-8/12 lg:w-6/12 h-10 text-[12px] lg:h-8 rounded-[8px] text-white bg-cyan-500 "
          >
            Continue
          </button>
          <button
            className=" w-full cursor-pointer sm:w-10/12 text-[12px] md:w-8/12 lg:w-6/12 h-10 lg:h-8 rounded-[8px] text-white bg-black "
            onClick={() => set_is_modal}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default ExportDynamic;
