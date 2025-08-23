"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const OffersPage = () => {
  const [offers, set_offers] = useState<Toffers[]>([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const supabase = createClient();
        const user_id = (await supabase.auth.getUser()).data.user?.id;
        const { data: offer_data, error: offer_data_error } = await supabase
          .from("loans")
          .select("*")
          .eq("type", "offer")
          .eq("debtor_id", "fd55f22b-c285-4e6b-9605-ee484e10b0ec");

        if (offer_data_error) throw new Error(offer_data_error.message);

        set_offers(offer_data[0]);

        console.log("loan offers for this user are here: ", offer_data);
      } catch (error) {
        console.log("Unable to fetch loan offers for this user: ", error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center">
      OffersPage
    </div>
  );
};

export default OffersPage;
