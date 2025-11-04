import { Idash_tab } from "@/models/interfaces";
import dashLottie from "@/public/assets/lottie1.json";
import lottie2 from "@/public/assets/lottie2.json";
import lottie3 from "@/public/assets/lottie3.json";
import lottie4 from "@/public/assets/lottie4.json";
import lottie6 from "@/public/assets/lottie6.json";

export const dash_tab_info: Idash_tab[] = [
  {
    tab_id: 2812792812,
    title: "HQ",
    blurb:
      "Your home base. Plan out your next move. Secure funding or seed an amigo's dream",
    animation: dashLottie,
    cta: "Export Data",
    href: "/hq",
  },
  {
    tab_id: 362792947,
    title: "Fund",
    blurb: "Offer to fund an amigo's loan. Set interest and repayment terms",
    animation: lottie2,
    cta: "Export Data",
    href: "/fund",
  },
  {
    tab_id: 7382716,
    title: "Offers",
    blurb: "Compare, accept or decline loan offers from interested amigos",
    animation: lottie3,
    cta: "Export Data",
    href: "/offers",
  },
  {
    tab_id: 11364862328,
    title: "Request",
    blurb: "Ask for a loan",
    animation: lottie4,
    cta: "Export Data",
    href: "/request",
  },
  {
    tab_id: 12872736281,
    title: "Repayments",
    blurb: "Track loan repayments & debt clearance",
    animation: lottie6,
    cta: "Export Data",
    href: "/repayments",
  },
];
