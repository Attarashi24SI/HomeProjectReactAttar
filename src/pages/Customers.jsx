import { useState } from "react";
import customersData from "../assets/data/CustomersData.json";
import PageHeader from "../components/PageHeader";
import AddButton from "../components/AddButton";
import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.phone) {
      const newCustomer = {
        id: customers.length + 1,
        ...formData,
      };

      setCustomers([...customers, newCustomer]);

      setFormData({
        name: "",
        email: "",
        phone: "",
        loyalty: "Bronze",
      });

      setShowForm(false);
    }
  };

  return (
    <main className="space-y-6">
      <PageHeader title="Customers" breadcrumb={["Home", "Customers"]} />

      <div>
        <AddButton onClick={() => setShowForm(true)}>+ Add Customer</AddButton>
      </div>

      {showForm && (
        <CustomerForm
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleAddCustomer}
          onCancel={() => setShowForm(false)}
        />
      )}

      <CustomerTable customers={customers} compact={showForm} />
    </main>
  );
}
