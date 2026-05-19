import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "./Badge";
import DataTable from "./DataTable";
import { useTheme } from "../context/ThemeContext";

const formatDate = (date) => new Date(date).toLocaleDateString("id-ID");

const formatPrice = (price) => new Intl.NumberFormat("id-ID").format(price);

const OrderTable = ({ orders, compact }) => {
    const { isLight } = useTheme();

    return (
        <DataTable
            columns={["Order ID", "Customer", "Date", "Total", "Status"]}
            compact={compact}
        >
            {orders.map((order) => (
                <tr
                    key={order.id}
                    className={`border-t transition ${isLight ? "border-slate-100 hover:bg-white" : "border-white/5 hover:bg-white/5"}`}
                >
                    <td className={`px-5 py-4 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                        {order.id}
                    </td>
                    <td className={`px-5 py-4 font-medium ${isLight ? "text-slate-700" : "text-white"}`}>
                        <Link
                            to={`/orders/${order.id}`}
                            className="text-emerald-400 hover:text-emerald-500"
                        >
                            {order.customerName}
                        </Link>
                    </td>
                    <td className="px-5 py-4">{formatDate(order.orderDate)}</td>
                    <td className="px-5 py-4">Rp {formatPrice(order.totalPrice)}</td>
                    <td className="px-5 py-4">
                        <StatusBadge status={order.status} isLight={isLight} />
                    </td>
                </tr>
            ))}
        </DataTable>
    );
};

export default OrderTable;
