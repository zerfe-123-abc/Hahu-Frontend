import useTheme from "@/hooks/useTheme";
import useThemeStore from "@/stores/ThemeStore";
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { CategoryData } from "./ChartData";

const CategoreyChart = () => {
  const COLORS = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"];
  const { theme, setTheme } = useThemeStore();
  const currentTheme = useTheme();
  return (
    <div
      className={`backdrop-blur-xl rounded-2xl hover:scale-[1.02] hover:translate-x-1 shadow-lg hover:shadow-lg transition-all duration-500 p-6
     ${currentTheme.background}
     ${currentTheme.text}

     ${
       theme === "black" || theme === "darkblue"
         ? "bg-slate-900"
         : "bg-slate-50"
     }
    `}
    >
      <div className="mb-6">
        <h3 className=" text-xl font-bold">Products Orderd by Category</h3>
        <p className="text-sm">Product Distribution</p>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={CategoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={55}
              paddingAngle={3}
            >
              {CategoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        {CategoryData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm">{item.name}</span>
            </div>

            <span className="text-sm font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoreyChart;
