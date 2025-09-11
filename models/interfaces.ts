import { LottieComponentProps } from "lottie-react";
import { ChangeEvent, SetStateAction } from "react";
import { NextRouter } from "./types";

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
  disabler: boolean;
}

export interface I_req_title {
  title: string;
  set_title: React.Dispatch<SetStateAction<string>>;
  set_part: React.Dispatch<SetStateAction<number>>;
  disabler: boolean;
}

export interface I_req_desc {
  description: string;
  set_description: React.Dispatch<SetStateAction<string>>;
  set_part: React.Dispatch<SetStateAction<number>>;
  disabler: boolean;
}

export interface I_nextbtn {
  btn_color: string;
  set_part: React.Dispatch<SetStateAction<number>>;
  handleFxn: () => void;
  disabler: boolean;
}

export interface Istore {
  pcp_is_done: boolean;
  title_is_done: boolean;
  desc_is_done: boolean;
  set_pcp_is_done: () => void;
  set_title_is_done: () => void;
  set_desc_is_done: () => void;
}

export interface I_req_sum {
  title: string;
  description: string;
  pcp: number;
  loan_type: string;
  router: NextRouter;
  set_is_loading: React.Dispatch<SetStateAction<boolean>>;
  alias: string;
  set_part: React.Dispatch<SetStateAction<number>>;
}

export interface I_progress_circle {
  id: number;
  dependent_state: boolean;
  title: string;
  blurb: string;
  pending_icon: React.ReactElement;
}

export interface I_fund_card {
  alias: string;
  user_id: string;
  loan_id: string;
  created_at: Date;
  pcp: number;
  description: string;
  title: string;
  index: number;
}

export interface I_funding {
  pcp: number;
  rate: number;
  set_rate: React.Dispatch<SetStateAction<number>>;
  term: number;
  set_term: React.Dispatch<SetStateAction<number>>;
  due: number;
  instalment: number;
  due_from: string;
  set_due_from: React.Dispatch<SetStateAction<string>>;
  due_by: string;
  set_due_by: React.Dispatch<SetStateAction<string>>;
  handleOfferToFund: () => void;
  set_is_funding: React.Dispatch<SetStateAction<boolean>>;
}

export interface I_snapshot {
  pcp: number;
  title: string;
  description: string;
  handleIsFunding: () => void;
}

export interface I_offer_card {
  loan_id: string;
  created_at: Date;
  pcp: number;
  due: number;
  term: number;
  due_from: Date;
  due_by: Date;
  creditor_id: string;
  description: string;
  title: string;
  alias: string;
  index: number;
  handleDecline: () => void;
  handleAccept: () => void;
}

export interface I_repayment_card {
  loan_id: string;
  pcp: number;
  due: number;
  term: number;
  description: string;
  title: string;
  alias: string;
  index: number;
  handleRepayment: () => void;
}

export interface I_input_comp {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checker: boolean;
  warning_text: string;
  passing_text: string;
}

export interface I_top_tab {
  id: number;
  animation: any;
  title: string;
  blurb: string;
  stat1: number;
  text1: string;
  stat2: number;
  text2: string;
}

export interface I_middle_tab {
  id: number;
  tab_value: string;
  tab_text: string;
  animation: any;
}

export interface I_s3_tab {
  id: number;
  count: number;
  icon: React.ReactElement;
  text: string;
  index: number;
}
