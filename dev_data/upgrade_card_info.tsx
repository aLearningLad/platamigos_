import { T_upgrade_card } from "@/models/types";
import { GiStarProminences } from "react-icons/gi";

export const upgrade_card_info: T_upgrade_card[] = [
  {
    id: 11,
    title: "Comprehensive",
    price: 29.99,
    features: [
      "KYC & assisted onboarding",
      "Invitation to purchase base tokens",
      "Detailed audit logs",
      "Basic enterprise features for 3 seats",
    ],
    icon: <GiStarProminences size={20} />,
  },
  {
    id: 22,
    title: "Comprehensive",
    price: 99,
    features: [
      "Everything in basic",
      "Priority access to upcoming features",
      "Tokenized transactions and preferential loan listings",
      "Enterprise features. Seats for up to 25 team members",
    ],
    icon: <GiStarProminences size={20} />,
  },
  {
    id: 33,
    title: "Pro",
    price: 59.99,
    features: [
      "Basic + Receive notifications + obtain free tokens",
      "Priority access to upcoming features",
      "Tokenized transactions and preferential loan listings",
      "Enterprise features. Seats for up to 25 team members",
    ],
    icon: <GiStarProminences size={20} />,
  },
];
