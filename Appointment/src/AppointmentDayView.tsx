import React, { useState } from "react";

export type Customer = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

interface Props {
    customer: Customer;
    stylistName: string;
    service: string;
}

export const Appointment: React.FC<Props> = ({ customer, stylistName, service }) => {
    return <>
        <div>{customer.firstName}</div>
        <div>{customer.lastName}</div>
        <div>{customer.phoneNumber}</div>
        <div>{stylistName}</div>
        <div>{service}</div>
    </>
};

export interface AppointmentsDayViewProps {
    appointments?: {
        startsAt: number;
        customer: Customer;
        stylistName: string;
        service: string;
    }[];
}

export const AppointmentsDayView: React.FC<AppointmentsDayViewProps> = (props) => {
    const { appointments = [] } = props;
    const [selected, setSelected] = useState<number>(0);
    const appointmentTimeOfDay = (startsAt: number): string => {
        const [h, m] = new Date(startsAt).toTimeString().split(":");
        return `${h}:${m}`
    }
    return <div id="appointmentsDayView">
        {appointments.length === 0 ?
            <p>{"There are no appointments scheduled for today."}</p>
            : <Appointment  {...appointments[selected]} />}
        {appointments.map((appointment, index) => {
            return <li key={appointment.startsAt}>
                <button type="button" onClick={() => setSelected(index)}>
                    {appointmentTimeOfDay(appointment.startsAt)}
                </button>
            </li>
        })}
    </div>
}