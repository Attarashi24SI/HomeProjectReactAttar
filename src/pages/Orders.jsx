import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../assets/data/OrderData.json";
import AddButton from "../components/AddButton";
import OrderForm from "../components/OrderForm";
import OrderTable from "../components/OrderTable";

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddOrder = (e) => {
    e.preventDefault();

    if (formData.customerName && formData.totalPrice && formData.orderDate) {
      setOrders([
        ...orders,
        {
          id: Math.max(...orders.map((order) => Number(order.id)), 0) + 1,
          ...formData,
          totalPrice: Number(formData.totalPrice),
        },
      ]);

      setFormData({
        customerName: "",
        status: "Pending",
        totalPrice: "",
        orderDate: "",
      });

      setShowForm(false);
    }
  };

  return (
    <main className="space-y-6">
      <PageHeader title="Orders" breadcrumb={["Home", "Orders"]} />

      <div>
        <AddButton onClick={() => setShowForm(true)}>+ Add Order</AddButton>
      </div>

      {showForm && (
        <OrderForm
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleAddOrder}
          onCancel={() => setShowForm(false)}
        />
      )}

      <OrderTable orders={orders} compact={showForm} />
    </main>
  );
}
