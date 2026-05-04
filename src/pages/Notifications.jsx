import React from "react";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../context/ThemeContext";

const notifications = [
    { title: "Order diterima", message: "Laundry pelanggan sudah masuk ke sistem.", time: "10 menit lalu" },
    { title: "Order selesai", message: "Pesanan siap diambil atau dikirim.", time: "1 jam lalu" },
    { title: "Pembayaran diterima", message: "Status pembayaran berhasil diperbarui.", time: "Kemarin" },
];

export default function Notifications() {
    const { isLight } = useTheme();

    return (
        <main className="space-y-6">
            <PageHeader title="Notifikasi" breadcrumb={["Home", "Notifikasi"]} />

            <section className="space-y-3">
                {notifications.map((item) => (
                    <article key={item.title} className={`rounded-lg border p-5 shadow-2xl ${isLight ? "border-teal-100 bg-teal-50 text-slate-700 shadow-teal-100" : "border-white/5 bg-[#06090f] text-white shadow-black/30"}`}>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="font-semibold">{item.title}</h2>
                                <p className={`mt-1 text-sm ${isLight ? "text-slate-500" : "text-gray-400"}`}>{item.message}</p>
                            </div>
                            <span className={`text-xs ${isLight ? "text-teal-600" : "text-emerald-300"}`}>{item.time}</span>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
