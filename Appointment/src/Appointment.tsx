import React from "react";

interface Props {
    customer: {
        firstName: string;
    }
}

export const Appointment: React.FC<Props> = ({ customer }) => {
    return <div>{customer.firstName}</div>
};