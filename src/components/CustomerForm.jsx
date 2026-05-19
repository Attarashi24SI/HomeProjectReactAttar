import React from "react";
import FormActions from "./FormActions";
import FormInput from "./FormInput";
import FormPanel from "./FormPanel";
import FormSelect from "./FormSelect";

const CustomerForm = ({ formData, onChange, onSubmit, onCancel }) => {
    return (
        <FormPanel title="Add New Customer">
            <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-4">
                <FormInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={onChange}
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={onChange}
                    required
                />
                <FormInput
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={onChange}
                    required
                />
                <FormSelect
                    name="loyalty"
                    value={formData.loyalty}
                    onChange={onChange}
                >
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                </FormSelect>
                <div className="md:col-span-4">
                    <FormActions onCancel={onCancel} />
                </div>
            </form>
        </FormPanel>
    );
};

export default CustomerForm;
