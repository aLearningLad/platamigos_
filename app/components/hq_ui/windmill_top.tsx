"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import useSWR from "swr";

const WindmillTop = () => {
  const fetchDetails = async () => {
    const supabase = createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    try {
      const { data: user_data, error: fetchError } = await supabase
        .from("all_users")
        .select("name, surname, alias")
        .eq("user_id", user_id);

      console.log("alias from db: ", user_data![0].alias);

      return user_data;
    } catch (error) {
      console.log("Unable to fetch user's details: ", error);
    }
  };

  const {
    data: user_data,
    error: user_data_error,
    isLoading,
  } = useSWR("user-details", fetchDetails);

  return (
    <span className=" w-full items-center flex h-[15%] justify-between py-3 lg:py-0 ">
      <p className=" text-[18px] lg:text-[12px] italic text-neutral-700">
        {user_data![0].alias}
      </p>
      <div className=" w-fit px-2 h-fit bg-neutral-700/10 rounded-[12px] ">
        <select
          className=" text-[8px] focus:outline-none cursor-pointer text-white"
          name=""
          id=""
        >
          <option className=" text-black" value="USD">
            1. USD
          </option>
          <option className=" text-black" value="ZAR">
            1. ZAR
          </option>
          <option className=" text-black" value="EUR">
            1. EUR
          </option>
        </select>
      </div>
    </span>
  );
};

export default WindmillTop;
