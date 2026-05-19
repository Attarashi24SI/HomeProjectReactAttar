import React from "react";

const SearchBar = ({
    value,
    onChange,
    placeholder = "Search...",
    className = "",
}) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`border border-gray-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 outline-none ${className}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default SearchBar;
