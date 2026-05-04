import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const { isLight } = useTheme();

    return (
        <header className={`w-full rounded-lg px-6 py-8 shadow-2xl ${isLight ? "bg-teal-50 shadow-teal-100 border border-teal-100" : "bg-gradient-to-r from-[#263f31] via-[#49d6ad] to-[#086a82] shadow-black/25"}`}>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                <div className={`flex h-11 w-80 items-center rounded-lg border px-4 shadow-lg ${isLight ? "border-teal-100 bg-white shadow-teal-100" : "border-white/10 bg-[#0a2630]/85 shadow-black/20"}`}>
                    <Search className={`mr-3 h-4 w-4 ${isLight ? "text-slate-500" : "text-gray-200"}`} />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className={`w-full bg-transparent text-sm outline-none ${isLight ? "text-slate-700 placeholder:text-slate-400" : "text-white placeholder:text-gray-200"}`}
                    />
                </div>

                <div></div>

                <div className="flex items-center justify-end gap-3">
                    <div className="text-right">
                        <p className={`text-sm font-semibold ${isLight ? "text-slate-700" : "text-white"}`}>Uroos Fatima</p>
                        <p className={`text-xs ${isLight ? "text-slate-500" : "text-white/65"}`}>uroos.design@gmail.com</p>
                    </div>

                    <div className={`h-11 w-11 rounded-full ${isLight ? "bg-rose-400" : "bg-gradient-to-br from-amber-300 to-orange-600"}`}></div>

                    <button className={`flex h-9 w-9 items-center justify-center ${isLight ? "text-slate-500" : "text-white/85"}`}>
                        <ChevronDown className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
