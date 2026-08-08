import { Link } from "react-router-dom";
import { useProducts } from "@/store/productStore";
import { useWishlist } from "@/store/wishlistStore";
import { useOrders } from "@/store/orderStore";

const Dashboard = () => {
  const { products } = useProducts();

  const { wishlist } = useWishlist();

  const { orders } = useOrders();

  // temporary user listings
  // later backend will filter by seller id
  const myListings = products.filter((product) => product.status === "PENDING");

  return (
    <div className="space-y-8">
      {/* Welcome */}

      <div>
        <h1 className="text-3xl font-bold">Welcome to Hahu Market 👋</h1>

        <p className="text-gray-500 mt-2">
          Manage your marketplace activity from here.
        </p>
      </div>

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">My Listings</h3>

          <p className="text-3xl font-bold mt-2">{myListings.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Wishlist</h3>

          <p className="text-3xl font-bold mt-2">{wishlist.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Orders</h3>

          <p className="text-3xl font-bold mt-2">{orders.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Messages</h3>

          <p className="text-3xl font-bold mt-2">2</p>
        </div>
      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/app/create-listing"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            + Create Listing
          </Link>

          <Link
            to="/browse"
            className=" border px-5 py-2 rounded-lg hover:bg-gray-100"
          >
            Browse Products
          </Link>

          <Link
            to="/app/orders"
            className="border px-5 py-2 rounded-lg hover:bg-gray-100"
          >
            View Orders
          </Link>

          <Link
            to="/app/wishlist"
            className="border px-5 py-2 rounded-lg hover:bg-gray-100
                        "
          >
            My Wishlist
          </Link>
        </div>
      </div>

      {/* Recent Activity */}

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          orders.slice(0, 3).map((order) => (
            <div
              key={order.id}
              className=" border-b py-3 flex justify-between
                                "
            >
              <span>Order #{order.id}</span>

              <span className="text-yellow-600">{order.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
