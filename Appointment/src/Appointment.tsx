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
    const { appointments = [] } = props;
    const appointmentTimeOfDay = (startsAt: number): string => {
        const [h, m] = new Date(startsAt).toTimeString().split(":");
        return `${h}:${m}`
    }
    return <div id="appointmentsDayView">
        {appointments.map((appointment) => {
            return <li key={appointment.startsAt}>
                {appointmentTimeOfDay(appointment.startsAt)}
            </li>
        })}
    </div>
}