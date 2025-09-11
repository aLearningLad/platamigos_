import { T_section_three_info } from "@/models/types";
import { FcSalesPerformance } from "react-icons/fc";
import { GiDiamondTrophy } from "react-icons/gi";
import { SiCrowdsource } from "react-icons/si";

export const section_three_info: T_section_three_info[] = [
  {
    id: 277,
    count: 24, // here, add a "k+" for thousand
    icon: <FcSalesPerformance size={28} />,
    text: "Offers disbursed",
  },
  {
    id: 9382,
    count: 150, // here, just add "+"
    icon: <SiCrowdsource size={28} color="white" />,
    text: "Amigos onboarded",
  },
  {
    id: 1287,
    count: 13, // here, just add "+"
    icon: <GiDiamondTrophy size={28} className=" text-cyan-400" />,
    text: "Innovation awards won",
  },
];
