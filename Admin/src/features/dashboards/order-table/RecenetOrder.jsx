import useTheme from "@/hooks/useTheme";
import { TableData } from "./TableData";
import useThemeStore from "@/stores/ThemeStore";

const RecentOrders = () => {
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
          <h3 className="text-xl font bold">Recent Order</h3>
          <p className="text-sm">Table</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
            <div className="text-sm">
              <button className="text-lg cursor-pointer">View All</button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto gap-1">
        <table className="w-full text-left">
          <thead className="text-left p-4 text-sm font-semibold">
            <tr>
              <th className="py-3">Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>payment</th>
              <th>from</th>
              <th>status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {TableData.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-slate-800/20 transition gap-3 p-4"
              >
                <td className="py-4">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.amount}</td>
                <td>{order.payment}</td>
                <td>{order.from}</td>

                <td>
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-semibold

                      ${
                        order.status === "Delivered"
                          ? "bg-green-500/20 text-green-500"
                          : order.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : order.status === "Processing"
                              ? "bg-blue-500/20 text-blue-500"
                              : "bg-red-500/20 text-red-500"
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </td>

                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
