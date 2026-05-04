import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout() {
  const { isLight } = useTheme();

  return (
    <div className={`flex min-h-screen ${isLight ? "bg-white" : "bg-[#0a0f1c]"}`}>
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="p-6 pb-0">
          <Header />
        </div>

        <div className="flex-1 px-6 pt-6 pb-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
