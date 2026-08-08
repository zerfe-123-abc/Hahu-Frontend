import React from "react";
import { ChartData } from "./ChartData";
import useThemeStore from "@/stores/ThemeStore";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import useTheme from "@/hooks/useTheme";

const SalesChart = () => {
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
          <h3 className="text-xl font bold">Sales Chart</h3>
          <p className="text-sm">Monthly Transaction and Sales Track Chart</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-200 rounded-full"></div>
            <div className="text-sm">
              <span>Sales</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={ChartData}>
            <CartesianGrid
              stroke={theme === "white" ? "#E5E7E9" : "#374151"}
              strokeDasharray="3 3"
            />

            <XAxis
              stroke={theme === "white" ? "#64748B" : "#CBD5E1"}
              dataKey="month"
            />

            <YAxis stroke={theme === "white" ? "#64748B" : "#CBD5E1"} />

            <Tooltip
              contentStyle={{
                backgroundColor: theme === "white" ? "#fff" : "#1E293B",
                borderRadius: "10px",
                border: "none",
              }}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
