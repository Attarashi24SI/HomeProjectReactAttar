import React from "react";
import PageHeader from "../components/PageHeader";
import FormActions from "../components/FormActions";
import FormInput from "../components/FormInput";
import FormPanel from "../components/FormPanel";
import FormSelect from "../components/FormSelect";
import FormTextarea from "../components/FormTextarea";
import { useTheme } from "../context/ThemeContext";

const services = ["Cuci Kering", "Cuci Setrika", "Express", "Karpet", "Sepatu"];

export default function LaundryBooking() {
    const { isLight } = useTheme();

    return (
        <main className="space-y-6">
            <PageHeader title="Pemesanan Laundry" breadcrumb={["Home", "Pemesanan Laundry"]} />

            <FormPanel>
                <h2 className={`mb-4 text-lg font-semibold ${isLight ? "text-teal-600" : "text-white"}`}>Buat Order Baru</h2>

                <form className="grid gap-4 md:grid-cols-2">
                    <FormInput placeholder="Nama pelanggan" />
                    <FormInput placeholder="Nomor telepon" />

                    <FormSelect defaultValue="">
                        <option value="" disabled>Pilih layanan</option>
                        {services.map((service) => (
                            <option key={service}>{service}</option>
                        ))}
                    </FormSelect>

                    <FormInput type="datetime-local" />
                    <FormTextarea className="min-h-24 md:col-span-2" placeholder="Alamat penjemputan" />

                    <div className="md:col-span-2">
                        <FormActions
                            submitLabel="Simpan Order"
                            cancelLabel="Reset"
                            submitType="button"
                        />
                    </div>
                </form>
            </FormPanel>
        </main>
    );
}
