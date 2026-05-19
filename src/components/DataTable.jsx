import React from "react";
import { useTheme } from "../context/ThemeContext";

const DataTable = ({ columns, children, compact = false }) => {
    const { isLight } = useTheme();

    return (
        <div className={`${compact ? "max-h-[260px]" : "max-h-[360px]"} overflow-auto rounded-lg border shadow-2xl ${isLight ? "border-teal-100 bg-teal-50 shadow-teal-100" : "border-white/5 bg-[#06090f] shadow-black/30"}`}>
            <table className={`w-full min-w-[760px] text-left text-sm ${isLight ? "text-slate-700" : "text-gray-300"}`}>
                <thead className={`sticky top-0 z-10 text-xs uppercase tracking-wide ${isLight ? "bg-white text-slate-400" : "bg-[#0f1724] text-gray-400"}`}>
                    <tr>
                        {columns.map((column) => (
                            <th key={column} className="px-5 py-4 font-semibold">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export default DataTable;
