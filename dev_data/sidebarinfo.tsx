import { Tsidebar_info } from "@/models/types";
import { IoHomeOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { VscGitPullRequestCreate } from "react-icons/vsc";

export const sidebarinfo: Tsidebar_info[] = [
  {
    id: 37712,
    icon: <IoHomeOutline size={12} className=" text-neutral-500" />,
    title: "HQ",
    href: "/hq",
  },
  {
    id: 8676711,
    icon: <GiMoneyStack size={12} className=" text-neutral-500" />,
    title: "Fund",
    href: "/fund",
  },
  {
    id: 8305524172,
    icon: <FaHandHoldingUsd size={12} className=" text-neutral-500" />,
    title: "Offers",
    href: "/offers",
  },
  {
    id: 24188271,
    icon: <RiSecurePaymentLine size={12} className=" text-neutral-500" />,
    title: "Repayments",
    href: "/repayments",
  },
  {
    id: 66372615,
    icon: <VscGitPullRequestCreate size={12} className=" text-neutral-500" />,
    title: "Request",
    href: "/request",
  },
];
