import React from "react";
import FormActions from "./FormActions";
import FormInput from "./FormInput";
import FormPanel from "./FormPanel";
import FormSelect from "./FormSelect";

const OrderForm = ({ formData, onChange, onSubmit, onCancel }) => {
    return (
        <FormPanel title="Add New Order">
            <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-4">
                <FormInput
                    type="text"
                    name="customerName"
                    placeholder="Customer Name"
                    value={formData.customerName}
                    onChange={onChange}
                    required
                />
                <FormInput
                    type="number"
                    name="totalPrice"
                    placeholder="Total Price"
                    value={formData.totalPrice}
                    onChange={onChange}
                    required
                />
                <FormInput
                    type="date"
                    name="orderDate"
                    value={formData.orderDate}
                    onChange={onChange}
                    required
                />
                <FormSelect
                    name="status"
                    value={formData.status}
                    onChange={onChange}
                >
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                </FormSelect>
                <div className="md:col-span-4">
                    <FormActions onCancel={onCancel} />
                </div>
            </form>
        </FormPanel>
    );
};

export default OrderForm;
