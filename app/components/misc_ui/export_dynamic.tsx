"use client";

import Lottie from "lottie-react";
import { SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import lottieLoading from "../../../public/assets/lottieloading.json";
import { createClient } from "@/utils/supabase/client";

const ExportDynamic = (set_is_modal: {
  set_is_modal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const handleExport = async () => {
    set_is_loading(true);
    const supabase = createClient();
    try {
      const user_id = (await supabase.auth.getUser()).data.user?.id;
      const { data: collected_data, error: collected_data_error } =
        await supabase
          .from("all_users")
          .select(
            `
            loans:loans_user_id_fkey(*),
            transactions_log:transactions_log_debtor_id_fkey(*),
            credit_scores(*)
            `
          )
          .eq("user_id", user_id);

      if (collected_data_error) throw new Error(collected_data_error.message);

      if (collected_data) {
        toast.success("Done!");
        set_is_loading(false);
        set_is_modal.set_is_modal(false);
        console.log("Collected data here: ", collected_data[0]);

        //   extract my data from response
        const raw_data = collected_data[0];

        //   convert it to a string
        const json_data = JSON.stringify(raw_data);

        //   then make it a blob
        const blob = new Blob([json_data], { type: "application/json" });

        //   create my link to download from
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "my_platamigos_data.json";

        //   trigger the download
        link.click();

        //   tidy up
        URL.revokeObjectURL(link.href);
      }
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
            onClick={() => set_is_modal.set_is_modal(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default ExportDynamic;
