import { redis } from "@/utils/redis/redis_client";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const user_id = (await supabase.auth.getUser()).data.user?.id;
  const cache_key = `${user_id}-community_loans`;

  const exists = await redis.exists(cache_key);
  console.log("Does cache exist?", exists); // should be 0 if deleted

  try {
    //  check cache first
    const cached_loans = await redis.get(cache_key);

    if (cached_loans) {
      console.log("This is from the cache, bruv: ", cached_loans);
      return NextResponse.json({ loans: cached_loans });
    }

    // get community loan data from db
    const { data: loan_data, error: loan_data_error } = await supabase
      .from("loans")
      .select("*")
      .neq("type", "offer") // do not show me offers
      .neq("user_id", user_id);

    // get offer data for this user
    const { data: offers_data, error: offers_data_error } = await supabase
      .from("loans")
      .select(
        `
        user_id,
        pcp,
        due,
        term,
        rate,
        due_from,
        due_by,
        description,
        title,
        transactions_log(debtor_id,
        creditor_id)
        `
      )
      .eq("type", "offer") // show me only offers for this user
      .neq("user_id", user_id);

    // show it to me
    console.log("Offer data from database: ", offers_data);

    // handle error
    if (loan_data_error) throw new Error(loan_data_error.message);

    // cache newly fetched data
    await redis.set(cache_key, JSON.stringify(loan_data));

    return NextResponse.json({ loans: loan_data });
  } catch (error) {
    console.log("Error while fetching community loans for dash: ", error);
    return NextResponse.json({
      message: `This error occured while fetching loans: ${error}`,
    });
  }
}
