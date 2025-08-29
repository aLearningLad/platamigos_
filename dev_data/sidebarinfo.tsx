import { Tsidebar_info } from "@/models/types";
import { IoHomeOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { VscGitPullRequestCreate } from "react-icons/vsc";

export const sidebarinfo: Tsidebar_info[] = [
  {
    id: 37712,
    icon: <IoHomeOutline />,
    title: "Dashboard",
    href: "/dash",
  },
  {
    id: 8676711,
    icon: <GiMoneyStack />,
    title: "Fund",
    href: "/fund",
  },
  {
    id: 8305524172,
    icon: <FaHandHoldingUsd />,
    title: "Offers",
    href: "/offers",
  },
  {
    id: 24188271,
    icon: <RiSecurePaymentLine />,
    title: "Repayments",
    href: "/repayments",
  },
  {
    id: 66372615,
    icon: <VscGitPullRequestCreate />,
    title: "Request",
    href: "/request",
  },
];
