import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  Receipt,
  Users2,
} from "lucide-react";

export const StatsData = [
  {
    title: "Total Users",
    value: "12,450",
    change: "+12%",
    icon: Users2,
    color: "text-green-500",
  },
  {
    title: "Active Users",
    value: "1,450",
    change: "+20%",
    icon: Users,
    color: "text-green-500",
  },
  {
    title: "Products",
    value: "2,318",
    change: "+8%",
    icon: Package,
    color: "text-red-500",
  },
  {
    title: "Orders",
    value: "835",
    change: "+4%",
    icon: ShoppingCart,
    color: "text-orange-500",
  },
  {
    title: "Revenue",
    value: "$18,200",
    change: "+16%",
    icon: DollarSign,
    color: "text-purple-500",
  },
  {
    title: "Transactions",
    value: "$150,000",
    change: "+56%",
    icon: Receipt,
    color: "text-green-500",
  },
];
