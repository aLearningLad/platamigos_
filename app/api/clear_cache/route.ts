import { redis } from "@/utils/redis/redis_client";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();
  const cache_key = body.cache_key;

  try {
    console.log("cache_key for this user looks like this: ", cache_key);

    await redis.del(cache_key);

    return NextResponse.json({ message: "Cache cleared" });
  } catch (error) {
    console.log("Unable to clear cache: ", error);
    return NextResponse.json({ message: `Unable to clear cache: ${error}` });
  }
}
