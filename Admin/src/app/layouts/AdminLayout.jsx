import React, { useState } from "react";
import Sidebar from "@/components/common/sidebar/Sidebar";
import Header from "@/components/common/header/Header";
import useTheme from "@/hooks/useTheme";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const currentTheme = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full ${currentTheme.background} ${currentTheme.text}`}
    >
      {/* Sidebar */}
      <aside className="sticky top-0 h-screen shrink-0">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </aside>

      <div className="flex flex-col flex-1">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <footer
          className={`h-14 flex items-center justify-center text-sm
           ${currentTheme.header}
           ${currentTheme.text}
          `}
        >
          © 2026 HAHU Market Admin Dashboard
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
