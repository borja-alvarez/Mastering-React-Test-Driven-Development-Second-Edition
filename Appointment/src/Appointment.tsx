import React from "react";

type Customer = { firstName: string; }

interface Props {
    customer: Customer
}

export const Appointment: React.FC<Props> = ({ customer }) => {
    return <div>{customer.firstName}</div>
};

interface AppointmentsDayViewProps {
    appointments?: {
        startsAt: number;
        customer: Customer
    }[];
}

export const AppointmentsDayView: React.FC<AppointmentsDayViewProps> = (props) => {
    const { appointments = [] } = props;
    const appointmentTimeOfDay = (startsAt: number): string => {
        const [h, m] = new Date(startsAt).toTimeString().split(":");
        return `${h}:${m}`
    }
    return <div id="appointmentsDayView">
        {appointments.length === 0 ?
            <p>{"There are no appointments scheduled for today."}</p>
            : <Appointment  {...appointments[0]} />}
        {appointments.map((appointment) => {
            return <li key={appointment.startsAt}>
                {appointmentTimeOfDay(appointment.startsAt)}
            </li>
        })}
    </div>
}