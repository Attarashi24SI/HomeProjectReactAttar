import React from "react";
import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import {
    Bell,
    ClipboardList,
    CreditCard,
    History,
    LayoutDashboard,
    ShoppingCart,
    Settings,
    MessageCircle,
    HelpCircle,
    SearchCheck,
    Tags,
    Moon,
    Sun,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
    const { isLight, toggleTheme } = useTheme();

    const menuClass = ({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition text-sm ${isActive
            ? isLight
                ? "bg-white text-teal-600 shadow-sm font-semibold"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md font-semibold"
            : isLight
                ? "text-white/85 hover:bg-white/15 hover:text-white"
                : "text-gray-400 hover:bg-white/10"
        }`;

    return (
        <div className={`sticky top-0 h-screen w-64 shrink-0 border-r text-gray-300 flex flex-col justify-between p-4 ${isLight ? "border-teal-400 bg-teal-500" : "border-white/10 bg-[#0b0f19]"}`}>

            {/* Top */}
            <div className="overflow-y-auto pr-1">

                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                    <div className={`w-6 h-6 rounded-sm ${isLight ? "bg-white" : "bg-gradient-to-tr from-cyan-400 to-blue-500"}`}></div>
                    <h1 className="text-white font-semibold text-lg">Bright Wash</h1>
                </div>

                {/* MENU */}
                <div className="mb-6">
                    <p className={`text-xs mb-3 ${isLight ? "text-white/70" : "text-gray-500"}`}>MENU</p>

                    <ul className="space-y-2">

                        <li>
                            <NavLink to="/" end className={menuClass}>
                                <LayoutDashboard size={18} /> Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/customers" className={menuClass}>
                                <BsPersonFill size={18} /> Customers
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/orders" className={menuClass}>
                                <ShoppingCart size={18} /> Orders
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/laundry-booking" className={menuClass}>
                                <ClipboardList size={18} /> Pemesanan Laundry
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/tracking-status" className={menuClass}>
                                <SearchCheck size={18} /> Tracking Status
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/services-pricing" className={menuClass}>
                                <Tags size={18} /> Layanan & Harga
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/notifications" className={menuClass}>
                                <Bell size={18} /> Notifikasi
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/order-history" className={menuClass}>
                                <History size={18} /> Riwayat Order
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/payments" className={menuClass}>
                                <CreditCard size={18} /> Pembayaran
                            </NavLink>
                        </li>

                    </ul>
                </div>

                {/* OTHERS */}
                <div>
                    <p className={`text-xs mb-3 ${isLight ? "text-white/70" : "text-gray-500"}`}>OTHERS</p>

                    <div className="flex flex-col gap-2">

                        <SidebarItem icon={<Settings size={18} />} label="Settings" isLight={isLight} />

                        <div className="relative">
                            <SidebarItem icon={<MessageCircle size={18} />} label="Messages" isLight={isLight} />
                            <span className="absolute right-3 top-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                                10
                            </span>
                        </div>

                        <SidebarItem icon={<HelpCircle size={18} />} label="Help & Support" isLight={isLight} />

                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${isLight ? "bg-white text-teal-600 hover:bg-teal-50" : "bg-white/5 text-gray-300 hover:bg-white/10"}`}
                >
                    {isLight ? <Moon size={17} /> : <Sun size={17} />}
                    {isLight ? "Dark Mode" : "Light Mode"}
                </button>

                {/* Bottom Profile */}
                <div className={`${isLight ? "bg-white/15" : "bg-white/5"} p-3 rounded-xl flex items-center gap-3`}>
                    <div className={`w-10 h-10 rounded-full ${isLight ? "bg-teal-100" : "bg-gray-600"}`}></div>

                    <div>
                        <p className="text-sm text-white">User Name</p>
                        <p className={`${isLight ? "text-white/70" : "text-gray-400"} text-xs`}>View Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label, isLight }) => {
    return (
        <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${isLight ? "text-white/85 hover:bg-white/15 hover:text-white" : "text-gray-400 hover:bg-white/10"}`}>
            {icon}
            <span className="text-sm">{label}</span>
        </div>
    );
};

export default Sidebar;
