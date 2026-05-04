import React from "react";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../context/ThemeContext";

const payments = [
    { id: "PAY001", order: "ORD001", customer: "Ahmad Wijaya", amount: "Rp 1.250.000", status: "Sudah bayar" },
    { id: "PAY002", order: "ORD002", customer: "Budi Santoso", amount: "Rp 850.000", status: "Belum bayar" },
    { id: "PAY003", order: "ORD004", customer: "Doni Pratama", amount: "Rp 2.100.000", status: "Sudah bayar" },
];

export default function Payments() {
    const { isLight } = useTheme();

    return (
        <main className="space-y-6">
            <PageHeader title="Pembayaran" breadcrumb={["Home", "Pembayaran"]} />

            <section className={`rounded-lg border p-5 shadow-2xl ${isLight ? "border-teal-100 bg-teal-50 text-slate-700 shadow-teal-100" : "border-white/5 bg-[#06090f] text-white shadow-black/30"}`}>
                <div className="grid gap-4 md:grid-cols-3">
                    {payments.map((payment) => (
                        <article key={payment.id} className={`rounded-lg border p-4 ${isLight ? "border-teal-100 bg-white" : "border-white/5 bg-white/5"}`}>
                            <p className={`text-xs ${isLight ? "text-slate-500" : "text-gray-400"}`}>{payment.id}</p>
                            <h2 className="mt-2 font-semibold">{payment.customer}</h2>
                            <p className={`mt-1 text-sm ${isLight ? "text-slate-500" : "text-gray-400"}`}>{payment.order}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <span>{payment.amount}</span>
                                <span className={`rounded-full px-3 py-1 text-xs font-medium ${payment.status === "Sudah bayar" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                                    {payment.status}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
