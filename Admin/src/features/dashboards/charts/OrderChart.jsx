import useTheme from "@/hooks/useTheme";
import useThemeStore from "@/stores/ThemeStore";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { OrderData } from "./ChartData";

const OrderChart = () => {
  const currentTheme = useTheme();
  const { theme, setTheme } = useThemeStore();
  return (
    <div
      className={`rounded-b-2xl rounded-2xl border-l-0 p-6 shadow-lg hover:shadow-lg transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] min-w-0
      ${
        theme === "black" || theme === "darkblue"
          ? "bg-slate-900"
          : "bg-slate-50"
      }

        ${currentTheme.background}
        ${currentTheme.text}

        `}
    >
      <div className="flex flex-1 items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font bold">Order Chart</h3>
          <p className="text-sm">Users Order and Track chart</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
            <div className="text-sm">
              <span>order</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={OrderData}>
            <CartesianGrid
              stroke={theme === "white" ? "#E2E8F0" : "#334155"}
              strokeDasharray="3 3"
              opacity={1}
            />
            <XAxis
              stroke={theme === "white" ? "#64748B" : "#CBD5E1"}
              dataKey="month"
            />
            <YAxis stroke={theme === "white" ? "#64748B" : "#CBD5E1"} />
            <Tooltip formatter={(value) => [`${value} Orders`, "Orders"]} />
            <Bar
              dataKey="orders"
              fill="#3B82F6"
              radius={[8, 8, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderChart;
