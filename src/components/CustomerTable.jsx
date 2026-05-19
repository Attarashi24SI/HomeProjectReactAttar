import React from "react";
import { Link } from "react-router-dom";
import { LoyaltyBadge } from "./Badge";
import DataTable from "./DataTable";
import { useTheme } from "../context/ThemeContext";

const CustomerTable = ({ customers, compact }) => {
    const { isLight } = useTheme();

    return (
        <DataTable
            columns={["ID", "Name", "Email", "Phone", "Loyalty"]}
            compact={compact}
        >
            {customers.map((customer) => (
                <tr
                    key={customer.id}
                    className={`border-t transition ${isLight ? "border-slate-100 hover:bg-white" : "border-white/5 hover:bg-white/5"}`}
                >
                    <td className={`px-5 py-4 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                        {customer.id}
                    </td>
                    <td className={`px-5 py-4 font-medium ${isLight ? "text-slate-700" : "text-white"}`}>
                        <Link to={`/customers/${customer.id}`} className="hover:underline">
                            {customer.name}
                        </Link>
                    </td>
                    <td className="px-5 py-4">{customer.email}</td>
                    <td className="px-5 py-4">{customer.phone}</td>
                    <td className="px-5 py-4">
                        <LoyaltyBadge loyalty={customer.loyalty} />
                    </td>
                </tr>
            ))}
        </DataTable>
    );
};

export default CustomerTable;
