import React, { useState } from "react";

const appointmentTimeOfDay = (startsAt: number): string => {
    const [h, m] = new Date(startsAt).toTimeString().split(":");
    return `${h}:${m}`
}

export type Customer = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface AppointmentProps {
    customer: Customer;
    stylist: any;
    service: any;
    notes: string;
    startsAt: number;
}

export const Appointment: React.FC<AppointmentProps> = (props) => {
    const { customer, stylist, service, notes, startsAt } = props
    return <>
        <div>{customer.firstName}</div>
        <div>{customer.lastName}</div>
        <div>{customer.phoneNumber}</div>
        <div>{stylist}</div>
        <div>{service}</div>
        <div>{notes}</div>
        <div>{appointmentTimeOfDay(startsAt)}</div>
    </>
};

export interface AppointmentsDayViewProps {
    appointments?: AppointmentProps[];
}

export const AppointmentsDayView: React.FC<AppointmentsDayViewProps> = (props) => {
    const { appointments = [] } = props;
    const [selected, setSelected] = useState<number>(0);

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