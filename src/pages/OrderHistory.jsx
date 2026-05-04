import React from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../assets/data/OrderData.json";
import { useTheme } from "../context/ThemeContext";

export default function OrderHistory() {
    const { isLight } = useTheme();

    return (
        <main className="space-y-6">
            <PageHeader title="Riwayat Order" breadcrumb={["Home", "Riwayat Order"]} />

            <section className={`max-h-[420px] overflow-auto rounded-lg border shadow-2xl ${isLight ? "border-teal-100 bg-teal-50 shadow-teal-100" : "border-white/5 bg-[#06090f] shadow-black/30"}`}>
                <table className={`w-full min-w-[760px] text-left text-sm ${isLight ? "text-slate-700" : "text-gray-300"}`}>
                    <thead className={`sticky top-0 text-xs uppercase tracking-wide ${isLight ? "bg-white text-slate-400" : "bg-[#0f1724] text-gray-400"}`}>
                        <tr>
                            <th className="px-5 py-4">Order ID</th>
                            <th className="px-5 py-4">Pelanggan</th>
                            <th className="px-5 py-4">Tanggal</th>
                            <th className="px-5 py-4">Total</th>
                            <th className="px-5 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((order) => (
                            <tr key={order.id} className={`border-t ${isLight ? "border-slate-100 hover:bg-white" : "border-white/5 hover:bg-white/5"}`}>
                                <td className={`px-5 py-4 ${isLight ? "text-slate-500" : "text-gray-400"}`}>{order.id}</td>
                                <td className={`px-5 py-4 font-medium ${isLight ? "text-slate-700" : "text-white"}`}>{order.customerName}</td>
                                <td className="px-5 py-4">{order.orderDate}</td>
                                <td className="px-5 py-4">Rp {new Intl.NumberFormat("id-ID").format(order.totalPrice)}</td>
                                <td className="px-5 py-4">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}
