export enum loan_types {
  RQT = "request",
  OFR = "offer",
}

export enum loan_statuses {
  PND = "pending",
  FND = "funded",
  RPD = "repaid",
  DFT = "defaulted",
  DEN = "funding offer denied",
}

export enum action_types {
  SGN = "signup",
  LGN = "login",
  RQT = "loan_request_created",
  OFR = "offer",
  PAY = "instalment_paid",
  STL = "settlement",
  DEF = "default_on_loan",
  DNY = "denied_offer",
  FND = "loan_funded",
  PFL = "profile_updated",
  OTR = "other",
  BLK = "blacklisted",
}
