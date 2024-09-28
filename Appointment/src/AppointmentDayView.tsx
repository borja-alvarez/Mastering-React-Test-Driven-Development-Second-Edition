import React, { useState } from "react";

const appointmentTimeOfDay = (startsAt: number): string => {
    const [h, m] = new Date(startsAt).toTimeString().split(":");
    return `${h}:${m}`
}

interface AppointmentHeaderProps {
    startsAt: number;
}

const AppointmentHeader: React.FC<AppointmentHeaderProps> = (props) => {
    const { startsAt } = props;
    return <h2>{`Today's appointment at ${appointmentTimeOfDay(startsAt)}`}</h2>
}

interface AppointmentLineProps {
    title: string;
    content: string;
}

const AppointmentLine: React.FC<AppointmentLineProps> = (props) => {
    const { title, content } = props;
    return <tr >
        <th style={{ paddingBottom: "20px", paddingRight: "16px", textAlign: "right" }}>{title}</th>
        <td style={{ paddingBottom: "20px" }}>{content}</td>
    </tr>
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
        <AppointmentHeader startsAt={startsAt} />
        <table>
            <tbody>
                <AppointmentLine title={"Customer:"} content={`${customer.firstName} ${customer.lastName}`} />
                <AppointmentLine title={"Phone number:"} content={customer.phoneNumber} />
                <AppointmentLine title={"Stylist:"} content={stylist} />
                <AppointmentLine title={"Service:"} content={service} />
                <AppointmentLine title={"Notes:"} content={notes} />
            </tbody>
        </table>

    </>
};

export interface AppointmentsDayViewProps {
    appointments?: AppointmentProps[];
}

export const AppointmentsDayView: React.FC<AppointmentsDayViewProps> = (props) => {
    const { appointments = [] } = props;
    const [selected, setSelected] = useState<number>(0);

    return <div id="appointmentsDayView" style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
            {appointments.map((appointment, index) => {
                return <li key={appointment.startsAt}>
                    <button type="button" onClick={() => setSelected(index)}>
                        {appointmentTimeOfDay(appointment.startsAt)}
                    </button>
                </li>
            })}
        </ul>
        <div style={{ borderLeft: "1px solid #000", paddingLeft: "16px" }}>
            {appointments.length === 0 ?
                <p>{"There are no appointments scheduled for today."}</p>
                : <Appointment  {...appointments[selected]} />}
        </div>
    </div>
}