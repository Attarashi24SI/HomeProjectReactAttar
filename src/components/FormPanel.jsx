import React from "react";
import { useTheme } from "../context/ThemeContext";

const FormPanel = ({ title, children }) => {
    const { isLight } = useTheme();

    return (
        <section className={`rounded-lg border p-4 shadow-2xl ${isLight ? "border-teal-100 bg-teal-50 shadow-teal-100" : "border-white/5 bg-[#06090f] shadow-black/30"}`}>
            {title && (
                <h2 className={`mb-3 text-base font-semibold ${isLight ? "text-teal-600" : "text-white"}`}>
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
};

export default FormPanel;
