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
}
