"use client";

import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import restingLottie from "@/public/assets/lottieresting.json";
import Dashtab from "@/app/components/dash_comps/dash_options/dashtab";
import { dash_tab_info } from "@/dev_data/dash_tab_info";
import DashSettingsBtn from "@/app/components/dash_comps/dash_options/dashsettingsbtn";
import useSWR from "swr";
import { createClient } from "@/utils/supabase/client";
import SignOutBtn from "@/app/components/misc_ui/signoutbtn";

const Dash = () => {
  const router = useRouter();
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [comm_loans, set_comm_loans] = useState<[]>([]);

  // fetch current details ===> refactor to fetch from cache
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

  const { data: user_data, error: user_data_error } = useSWR(
    "user-details",
    fetchDetails
  );

  // convert this to SWR
  useEffect(() => {
    const fetchLoans = async () => {
      const res = await fetch("/api/community_loans");
      const loan_data = await res.json();

      set_comm_loans(loan_data.loans);
    };

    fetchLoans();
  }, []);

  const toptabs = dash_tab_info.slice(0, 3);
  const bottomtabs = dash_tab_info.slice(3);

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center">
      {is_loading ? (
        <div className=" w-full flex-col text-center min-h-screen flex justify-center items-center text-xl lg:text-[12px] ">
          <p className=" text-2xl lg:text-[14px]">Just a moment</p>
          <p className=" text-xl lg:text-[10px] ">{"We're"} signing you out</p>
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col px-1 md:px-3 lg:px-20 xl:px-28 ">
          <div className=" w-full h-full pb-2 flex flex-col items-center">
            <section className=" w-full flex flex-col items-center py-4 ">
              <Lottie
                animationData={restingLottie}
                className=" w-16 h-16 rounded-full border-4 border-neutral-400/10 "
              />
              <p className=" text-[18px] lg:text-[10px] text-neutral-500 font-semibold text-center ">
                Welcome, {user_data?.[0].alias ?? "User"}
              </p>
              <p className=" text-[15px] lg:text-[12px] font-bold text-center ">
                To get started, try making a loan <br /> request. Or opt to fund
                somebody {"else's"}.
              </p>
            </section>
            <div className=" w-full lg:px-28 h-full flex flex-col gap-3 ">
              {/* top */}
              <div className=" w-full min-h-[20vh] lg:h-1/2 lg:flex-row flex-col flex gap-3 ">
                {toptabs.map(
                  ({ animation, blurb, cta, tab_id, title, href }) => (
                    <Dashtab
                      href={href}
                      key={tab_id}
                      animation={animation}
                      blurb={blurb}
                      cta={cta}
                      tab_id={tab_id}
                      title={title}
                    />
                  )
                )}
              </div>

              {/* bottom  */}
              <div className=" w-full min-h-[20vh] lg:h-1/2 lg:flex-row flex-col flex gap-3 ">
                {bottomtabs.map(
                  ({ animation, blurb, cta, tab_id, title, href }) => (
                    <Dashtab
                      href={href}
                      key={tab_id}
                      animation={animation}
                      blurb={blurb}
                      cta={cta}
                      tab_id={tab_id}
                      title={title}
                    />
                  )
                )}
                <DashSettingsBtn />
              </div>

              {/* <div className=" w-full h-[20vh] lg:h-1/2 flex-col lg:flex-row flex gap-3 ">
                {bottomtabs.map(
                  ({ animation, blurb, cta, tab_id, title, href }) => (
                    <Dashtab
                      href={href}
                      key={tab_id}
                      animation={animation}
                      blurb={blurb}
                      cta={cta}
                      tab_id={tab_id}
                      title={title}
                    />
                  )
                )}

                <DashSettingsBtn />
                </div> */}
            </div>
          </div>

          {/* maybe user later on */}
          {/* {comm_loans.map((loan: Tcommunity_requests) => (
            <Link
              className=" flex flex-col items-center justify-center space-y-2 bg-neutral-200 rounded-lg p-4 "
              key={loan.loan_id}
              href={`/fund_specific/${loan.loan_id}`}
            >
              <p>By: {loan.alias}</p>
              <p>{loan.title}</p>
              <p>{loan.description}</p>
              <span className=" w-full flex gap-1 justify-center ">
                <p>Asking for</p>
                <p>R{loan.pcp}</p>
              </span>
            </Link>
          ))}

          <button
            onClick={() => handleSignOut(router, is_loading, set_is_loading)}
          >
            Sign Out
          </button> */}
        </div>
      )}

      <div className=" flex lg:hidden w-full h-40 p-4 items-start justify-center">
        <SignOutBtn
          is_loading={is_loading}
          router={router}
          set_is_loading={set_is_loading}
        />
      </div>
    </div>
  );
};

export default Dash;
