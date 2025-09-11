import { LottieComponentProps } from "lottie-react";
import { ReactElement } from "react";

declare type NextRouter = ReturnType<typeof useRouter>;

declare type Tcommunity_requests = {
  alias: string;
  user_id: string;
  loan_id: string;
  created_at: Date;
  pcp: number;
  description: string;
  title: string;
};

declare type Toffers = {
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
};

declare type Tuser_info = {
  user_id: string;
  score: number;
  balance: number;
  loans_funded: number;
  debts_settled: number;
  total_creditors: number;
  total_debtors: number;
};

declare type Tsidebar_info = {
  id: number;
  icon: ReactElement;
  title: string;
  href: string;
};

declare type Toptions_info = {
  id: number;
  icon: ReactElement;
  title: string;
};

declare type T_req_trackers_info = {
  id: number;
  title: string;
  blurb: string;
  pending_icon: React.ReactElement;
  dependent_state: boolean;
};

declare type T_settings_info = {
  name: string;
  surname: string;
  alias: string;
};

declare type T_top_tab = {
  id: number;
  animation: any;
  title: string;
  blurb: string;
  stat1: number;
  text1: string;
  stat2: number;
  text2: string;
};

declare type T_middle_tab = {
  id: number;
  tab_value: string;
  tab_text: string;
  animation: any;
};

declare type T_logs_data = {
  alias: string;
  created_at: Date;
  creditor_id?: string;
  debtor_id?: string;
  description: string;
  due: number;

  loan_id: string;
  pcp: number;
  rate?: number;
  status: string;
  target_loan_id: null;
  term?: number;
  title: string;
  type: string;
  updated_at?: Date;
  user_id: string;
};

declare type T_section_three_info = {
  id: number;
  count: number;
  icon: React.ReactElement;
  text: string;
};
