import React from "react";

interface Props {
    customer: {
        firstName: string;
    }
}

export const Appointment: React.FC<Props> = ({ customer }) => {
    return <div>{customer.firstName}</div>
};

interface AppointmentsDayViewProps {
    appointments?: {
        startsAt: number
    }[];
}

export const AppointmentsDayView: React.FC<AppointmentsDayViewProps> = (props) => {
    const { appointments = [] } = props
    return <div id="appointmentsDayView">
        {appointments.map((appointment, index) => <li key={appointment.startsAt}></li>)}
    </div>
}