import { T_middle_tab } from "@/models/types";
import balanceLottie from "@/public/assets/balanceLottie.json";
import fundedLottie from "@/public/assets/fundedLottie.json";

export const hq_middle_tab_new_user_info: T_middle_tab[] = [
  {
    id: 3,
    tab_text: "Loans funded so far",
    tab_value: "22",
    animation: balanceLottie,
  },
  {
    id: 4,
    tab_text: "Current balance",
    tab_value: "R56500",
    animation: fundedLottie,
  },
];
