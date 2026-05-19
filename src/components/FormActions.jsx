import React from "react";
import { useTheme } from "../context/ThemeContext";

const FormActions = ({
    submitLabel = "Save",
    cancelLabel = "Cancel",
    onCancel,
    submitType = "submit",
}) => {
    const { isLight } = useTheme();

    return (
        <div className="flex justify-end gap-3">
            <button
                type={submitType}
                className={`${isLight ? "bg-rose-400 hover:bg-rose-500" : "bg-emerald-500 hover:bg-emerald-600"} rounded-lg px-5 py-2 text-sm font-semibold text-white`}
            >
                {submitLabel}
            </button>

            <button
                type="button"
                onClick={onCancel}
                className={`rounded-lg border px-5 py-2 text-sm font-semibold ${isLight ? "border-slate-100 bg-white text-slate-500 hover:bg-teal-50" : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"}`}
            >
                {cancelLabel}
            </button>
        </div>
    );
};

export default FormActions;
