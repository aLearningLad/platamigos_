"use client";

import { plataStore } from "@/app/(store)/store";
import { Istore } from "@/models/interfaces";
import { T_req_trackers_info } from "@/models/types";
import { TiTick } from "react-icons/ti";

const pcp_is_done = plataStore((store: Istore) => store.pcp_is_done);
const title_is_done = plataStore((store: Istore) => store.title_is_done);
const desc_is_done = plataStore((store: Istore) => store.desc_is_done);

export const req_trackers_info: T_req_trackers_info[] = [
  {
    id: 1,
    title: "Principle",
    blurb: "Amount to borrow",
    pending_icon: <TiTick />,
    dependent_state: pcp_is_done,
  },
  {
    id: 22,
    title: "Title",
    blurb: "Loan details",
    pending_icon: <TiTick />,
    dependent_state: title_is_done,
  },
  {
    id: 4,
    title: "Description",
    blurb: "More information on request",
    pending_icon: <TiTick />,
    dependent_state: desc_is_done,
  },
];
