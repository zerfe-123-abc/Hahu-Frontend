import React from "react";
import StatsGrid from "./static-card/StatsGrid";
import SalesChart from "./charts/SalesChart";
import RevenueChart from "./charts/RevenueChart";
import OrderChart from "./charts/OrderChart";
import CategoreyChart from "./charts/CategoreyChart";
import RecenetOrder from "./order-table/RecenetOrder";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <StatsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <RevenueChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrderChart />
        <CategoreyChart />
        <RecenetOrder />
      </div>
    </div>
  );
};

export default Dashboard;
