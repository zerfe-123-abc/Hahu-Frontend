import { StatsData } from "@/features/dashboards/static-card/StatsData";
import StatusCard from "./StatusCard";

const StatsGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
      {StatsData.map((item, index) => (
        <StatusCard
          key={index}
          title={item.title}
          value={item.value}
          change={item.change}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </section>
  );
};

export default StatsGrid;
