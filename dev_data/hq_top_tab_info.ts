import { T_top_tab } from "@/models/types";
import debtLottie from "@/public/assets/debtLottie.json";
import interestLottie from "@/public/assets/interestLottie.json";

export const hq_top_tab_info: T_top_tab[] = [
  {
    id: 1,
    animation: debtLottie,
    title: "Credit Score",
    blurb:
      "Your credit rating. This affects your risk profile in lender's eyes",
    stat1: 540,
    stat2: 22.3,
    text1: "Out of 800",
    text2: "Out of 100",
  },
  {
    id: 2,
    animation: interestLottie,
    title: "Total Debt",
    blurb: "Sum of all your loans. Use these metrics to make informed choices",
    stat1: 13,
    stat2: 5,
    text1: "Outstanding loans",
    text2: "Debtors owing you",
  },
];
