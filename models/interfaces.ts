import { LottieComponentProps } from "lottie-react";
import { SetStateAction } from "react";

export interface Isignupform {
  set_is_new: React.Dispatch<SetStateAction<boolean>>;
}
export interface Isigninform {
  set_is_new: React.Dispatch<SetStateAction<boolean>>;
}
export interface Ionboarding_screens {
  set_is_loading: React.Dispatch<SetStateAction<boolean>>;
}

export interface Idash_tab {
  tab_id: number;
  title: string;
  blurb: string;
  cta: string;
  animation: any;
  href: string;
}

export interface I_pcp {
  set_pcp: React.Dispatch<SetStateAction<number>>;
  pcp: number;
  set_part: React.Dispatch<SetStateAction<number>>;
  set_pcp_done: React.Dispatch<SetStateAction<boolean>>;
}

export interface I_req_title {
  title: string;
  set_title: React.Dispatch<SetStateAction<string>>;
  set_part: React.Dispatch<SetStateAction<number>>;
  set_title_done: React.Dispatch<SetStateAction<boolean>>;
}

export interface I_req_desc {
  description: string;
  set_description: React.Dispatch<SetStateAction<string>>;
  set_part: React.Dispatch<SetStateAction<number>>;
}

export interface I_nextbtn {
  btn_color: string;
  set_part: React.Dispatch<SetStateAction<number>>;
  set_which_done: React.Dispatch<SetStateAction<boolean>>;
}
