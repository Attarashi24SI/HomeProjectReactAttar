import React from "react";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../context/ThemeContext";

const services = ["Cuci Kering", "Cuci Setrika", "Express", "Karpet", "Sepatu"];

export default function LaundryBooking() {
    const { isLight } = useTheme();
    const inputClass = `rounded-lg border px-3 py-2 text-sm outline-none focus:border-emerald-400 ${isLight
        ? "border-slate-100 bg-white text-slate-700 placeholder:text-slate-400"
        : "border-white/10 bg-[#0f1724] text-white placeholder:text-gray-500"
        }`;

    return (
        <main className="space-y-6">
            <PageHeader title="Pemesanan Laundry" breadcrumb={["Home", "Pemesanan Laundry"]} />

            <section className={`rounded-lg border p-5 shadow-2xl ${isLight ? "border-teal-100 bg-teal-50 text-slate-700 shadow-teal-100" : "border-white/5 bg-[#06090f] text-white shadow-black/30"}`}>
                <h2 className={`mb-4 text-lg font-semibold ${isLight ? "text-teal-600" : "text-white"}`}>Buat Order Baru</h2>

                <form className="grid gap-4 md:grid-cols-2">
                    <input className={inputClass} placeholder="Nama pelanggan" />
                    <input className={inputClass} placeholder="Nomor telepon" />

                    <select className={inputClass} defaultValue="">
                        <option value="" disabled>Pilih layanan</option>
                        {services.map((service) => (
                            <option key={service}>{service}</option>
                        ))}
                    </select>

                    <input className={inputClass} type="datetime-local" />
                    <textarea className={`${inputClass} min-h-24 md:col-span-2`} placeholder="Alamat penjemputan" />

                    <div className="flex justify-end gap-3 md:col-span-2">
                        <button type="button" className={`rounded-lg border px-5 py-2 text-sm ${isLight ? "border-slate-100 bg-white text-slate-500 hover:bg-teal-50" : "border-white/10 bg-white/5 text-gray-300"}`}>
                            Reset
                        </button>
                        <button type="button" className={`rounded-lg px-5 py-2 text-sm font-semibold text-white ${isLight ? "bg-rose-400 hover:bg-rose-500" : "bg-emerald-500 hover:bg-emerald-600"}`}>
                            Simpan Order
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}
