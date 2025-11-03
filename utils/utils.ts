import { Tcommunity_requests } from "@/models/types";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function showTime() {
  const date = new Date();
  const time = date.toTimeString();
  return time;
}

// helper to randomize dates within the past year
export function randomPastDate() {
  const now = new Date().getTime();
  const oneYear = 365 * 24 * 60 * 60 * 1000;
  const randomAgo = Math.floor(Math.random() * oneYear);
  return new Date(now - randomAgo);
}

// display money values neatly --> use the .format() method
export const zar_currency = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  minimumFractionDigits: 2,
});

// my fake data to develop fundable tabs
export const dummies: Tcommunity_requests[] = [
  {
    alias: "buddy_boss222", // test5 ==> done
    created_at: randomPastDate(),
    description: "money for gta 6",
    loan_id: "a636ead4-3a59-4xxc-ab8a-7546dc9f0838",
    pcp: 4500,
    title: "gta vi fund",
    user_id: "e759f437-7192-4d3f-a1d9-054e6b1ac5a3",
  },
  {
    alias: "sunny_day98", // test6 ==> done
    created_at: randomPastDate(),
    description: "Saving up for a road trip across the Garden Route",
    loan_id: "bb46ad7e-12a4-4dd1-9301-3fbd47d6a9c9",
    pcp: 12000,
    title: "Garden Route Adventure",
    user_id: "41c86f21-2c4b-4eb7-8c1e-09c25a7659f0",
  },
  {
    alias: "crypto_owl", // test7 ==> done
    created_at: randomPastDate(),
    description: "Need capital to expand my mining rig 🖥️",
    loan_id: "c8aaf72e-8c33-4b54-8a8a-7f2d891e23f1",
    pcp: 25000,
    title: "Ethereum Mining Expansion",
    user_id: "7f91d22c-89bb-4f47-b58d-12e08cd0bb29",
  },
  {
    alias: "chefmo", // test8 ==> done
    created_at: randomPastDate(),
    description: "Upgrading kitchen equipment for my small bakery",
    loan_id: "f14a21d7-96a8-4e12-9a4c-ff20fbc6e390",
    pcp: 8500,
    title: "Bakery Dreams",
    user_id: "1a8c9f84-53b6-4a2d-90bc-7a2916e29bb1",
  },
  {
    alias: "wanderlust_kay", // test9 ==> done
    created_at: randomPastDate(),
    description: "Looking to fund my study abroad semester in Italy 🇮🇹",
    loan_id: "d77b61f2-c3fa-466b-9e6d-78e3f0a92c45",
    pcp: 32000,
    title: "Study Abroad: Florence",
    user_id: "64f9b72b-09e6-43f5-a2f5-19f14826a5de",
  },
  {
    alias: "tech_wizard11", // test10 ==> done
    created_at: randomPastDate(),
    description: "Funding prototype for my IoT startup",
    loan_id: "e98a23fd-4476-489f-9d84-1a32cc67b5f9",
    pcp: 50000,
    title: "Smart Home Prototype",
    user_id: "92cf8a63-0a31-4d6b-bd24-26a93c0aa87e",
  },
  {
    alias: "gamer_granny", // test11 ==> done
    created_at: randomPastDate(),
    description:
      "Need a new high-refresh monitor for competitive Valorant 👵🎮",
    loan_id: "a5f4b3d1-42cc-489b-97f6-8b142ee0fadc",
    pcp: 6800,
    title: "144hz Gaming Setup",
    user_id: "0c92f5b2-11e7-465e-bda5-bd24e3f60e25",
  },
  {
    alias: "eco_dreamer", // test12 ==> done
    created_at: randomPastDate(),
    description:
      "Want to install solar panels on my rooftop and cut down bills",
    loan_id: "c913fb1f-d4a0-4ee6-86f8-5f96c41a32de",
    pcp: 42000,
    title: "Rooftop Solar Project",
    user_id: "f73b83c4-7c2d-4b09-9c16-bba9b084bfa0",
  },
  {
    alias: "saxman24", // test13 ==> done
    created_at: randomPastDate(),
    description: "Saving to buy a vintage Selmer saxophone 🎷",
    loan_id: "d51a239a-b10a-4e3c-a764-309fd70de542",
    pcp: 15000,
    title: "Vintage Saxophone Purchase",
    user_id: "bf22cc68-8021-4455-a9bb-1b18f210dfc3",
  },
  {
    alias: "healthquest", // test5 ==> done
    created_at: randomPastDate(),
    description: "Covering expenses for marathon training & gear",
    loan_id: "fdd90d6c-7ff2-414c-88b2-79931a8ce85d",
    pcp: 9000,
    title: "Marathon Journey",
    user_id: "ce649a07-2605-4418-8fb7-08bc8f1b4cb4",
  },
  {
    alias: "artsy_amy", // test7 ==> done
    created_at: randomPastDate(),
    description: "Need funds for paints, canvases, and gallery fees 🎨",
    loan_id: "e3c1928d-bc1b-47f5-914e-184f9f736e7a",
    pcp: 7200,
    title: "Art Exhibition Prep",
    user_id: "4afaf173-98e9-4931-84bb-95d332db0f92",
  },
];

export const months_arr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const convertToYMD = (dateValue: Date) => {
  const year = dateValue.getFullYear();
  const month = dateValue.getMonth();
  const day = String(dateValue.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
