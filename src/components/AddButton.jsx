import React from "react";
import { useTheme } from "../context/ThemeContext";

const AddButton = ({ children, onClick }) => {
    const { isLight } = useTheme();

    return (
        <button
            onClick={onClick}
            className={`${isLight ? "bg-rose-400 hover:bg-rose-500" : "bg-emerald-500 hover:bg-emerald-600"} rounded-md px-4 py-2 text-white`}
        >
            {children}
        </button>
    );
};

export default AddButton;
