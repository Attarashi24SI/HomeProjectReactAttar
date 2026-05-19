import React from "react";

const baseClass = "inline-flex rounded-full px-3 py-1 text-xs font-medium";

const statusTone = {
    Completed: {
        light: "bg-emerald-100 text-emerald-700",
        dark: "bg-green-500 text-white",
    },
    Pending: {
        light: "bg-sky-100 text-sky-700",
        dark: "bg-yellow-400 text-white",
    },
    Cancelled: {
        light: "bg-rose-100 text-rose-700",
        dark: "bg-red-500 text-white",
    },
};

const loyaltyTone = {
    Gold: "bg-amber-400 text-white",
    Silver: "bg-gray-300 text-white",
    Bronze: "bg-orange-600 text-white",
};

export const StatusBadge = ({ status, isLight }) => {
    const tone = statusTone[status] || {
        light: "bg-slate-100 text-slate-700",
        dark: "bg-gray-400 text-white",
    };

    return (
        <span className={`${baseClass} ${isLight ? tone.light : tone.dark}`}>
            {status}
        </span>
    );
};

export const LoyaltyBadge = ({ loyalty }) => {
    return (
        <span className={`${baseClass} ${loyaltyTone[loyalty] || loyaltyTone.Silver}`}>
            {loyalty}
        </span>
    );
};

export default StatusBadge;
