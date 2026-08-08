import Button from "@/components/ui/Button";
import { Gem, ScanBarcodeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Browse", link: "/browse" },
  ];

  return (
    <div>
      <div className="w-full px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between mb-2 ml-6">
        <div className="flex items-center gap-4 mb-1 flex-1 ml-4">
          {/* Menu Links */}
          <div className="flex items-center gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.images}
                to={item.link}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.link
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Sell CTA button */}
        <div className="flex gap-4 mr-6">
          <Link to="/create-listing">
            <Button variant="primary" size="sm" className="gap-1.5">
              <Gem size={20} />
              <span>Continue As Seller</span>
            </Button>
          </Link>
          <Link to="/create-listing">
            <Button variant="primary" size="sm" className="gap-1.5">
              <ScanBarcodeIcon size={20} />
              <span>Countiue As Buyer</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
