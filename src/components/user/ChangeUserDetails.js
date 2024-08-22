import React, { useState } from 'react';
import {updateUser} from "../../apiRoutes/userRoutes";
import FormField from "./FormField";

const fields = [
    { key: 'firstname', label: 'First Name:', type: 'text' },
    { key: 'lastname', label: 'Last Name:', type: 'text' },
    { key: 'username', label: 'Username:', type: 'text' },
    { key: 'email', label: 'Email:', type: 'email' },
    { key: 'password', label: 'Password:', type: 'password' },
];

function ChangeUserDetails() {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', username: '', email: '', password: ''});
    const handleFieldChange = (updatedField) => {
        setFormData((prevData) => ({
            ...prevData,
            ...updatedField,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(formData);
    };

    return (
        <form className="user-details-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
                <FormField
                    key={field.key}
                    field={field}
                    value={formData[field.key]}
                    onValueChange={handleFieldChange}
                />
            ))}
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    );
}

export default ChangeUserDetails;
