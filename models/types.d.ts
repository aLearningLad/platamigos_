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
