import { Istore } from "@/models/interfaces";
import { create } from "zustand";

export const plataStore = create<Istore>()((set) => ({
  // state
  pcp_is_done: false,
  title_is_done: false,
  desc_is_done: false,

  // setters
  set_pcp_is_done: () => set((state) => ({ pcp_is_done: !state.pcp_is_done })),
  set_title_is_done: () =>
    set((state) => ({ title_is_done: !state.title_is_done })),
  set_desc_is_done: () =>
    set((state) => ({ desc_is_done: !state.desc_is_done })),
}));
