//import useTheme from "@/hooks/useTheme";
import useThemeStore from "@/stores/ThemeStore";
import React from "react";

const StatusCard = ({ title, value, change, icon: Icon, color }) => {
  const { theme, setTheme } = useThemeStore();
  //const currentTheme = useTheme();
  return (
    <div
      className={`rounded-2xl border-l-0 p-6 shadow-lg hover:shadow-lg transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] ${
        theme === "darkblue" || theme === "black"
          ? "bg-slate-900"
          : "bg-slate-50"
      } `}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs">{title}</p>
          <h2 className="text-3xl font-bold mt-2">{value}</h2>
          <p className="text-green-500 text-sm mt-2">{change}</p>
        </div>

        <div
          className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center`}
        >
          <Icon size={28} />
        </div>
      </div>
      {/* colored progress grid*/}

      <div className="mt-4 h-1.5 rounded-full bg-slate-300 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-700`}
          style={{ width: "70%" }}
        />
      </div>
    </div>
  );
};

export default StatusCard;
