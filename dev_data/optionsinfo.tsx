import { Toptions_info } from "@/models/types";
import { GiArmorUpgrade } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";

export const optionsInfo: Toptions_info[] = [
  {
    id: 378713,
    icon: <GiArmorUpgrade className=" text-purple-500" size={18} />,
    title: "Upgrade",
  },
  {
    id: 36027217,
    icon: <VscFeedback size={18} />,
    title: "Feedback",
  },
];
