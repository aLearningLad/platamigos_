declare type NextRouter = ReturnType<typeof useRouter>;

declare type Tcommunity_requests = {
  user_id: string;
  loan_id: string;
  created_at: Date;
  pcp: number;
  description: string;
  title: string;
};

declare type Toffers = {
  created_at: Date;
  pcp: number;
  due: number;
  term: number;
  due_from: Date;
  due_by: Date;
  debtor_id?: string;
  creditor_id?: string;
  description: string;
  title: string;
};
