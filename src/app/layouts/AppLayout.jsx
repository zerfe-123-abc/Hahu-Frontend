import { useState } from "react";
import Navbar from "@/components/common/header/Navbar";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/store/authStore.jsx";
//import ChatPage from "@/features/chats/ChatPage";

const AppLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useAuth();

  const location = useLocation();

  const isChatPage = location.pathname === "/app/chat";

  return (
    <div className="h-screen bg-slate-50 text-black">
      <Sidebar
        isOpen={showSidebar}
        variant="user"
        onClose={() => setShowSidebar(false)}
      />

      <div
        className={`h-screen transition-all duration-500 ${showSidebar ? "md:pl-64" : "md:pl-[88px]"}`}
      >
        <Navbar toggleSidebar={() => setShowSidebar((prev) => !prev)} />

        <main
          className={
            isChatPage
              ? "h-[calc(100vh-64px)] overflow-hidden"
              : "min-h-[calc(100vh-64px)] px-4 py-6 md:px-8"
          }
        >
          <Outlet />
        </main>
        {!isChatPage && (
          <footer className="bg-slate-300 text-black pt-4 pb-6 font-bold text-100pxl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-gray-950 text-lg">
                &copy; {new Date().getFullYear()} HAHU MARKET. All rights
                reserved.
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default AppLayout;
