import React, { useState } from "react";

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`
}

export const Appointment = ({ customer, stylist, service, notes, startsAt }) => (
  <>
    <table>
      <thead>
        <tr>
          <th>{startsAt}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{customer?.firstName}</td>
        </tr>
        <tr>
          <td>{customer?.lastName}</td>
        </tr>
        <tr>
          <td>{customer?.phoneNumber}</td>
        </tr>
        <tr>
          <td>{stylist}</td>
        </tr>
        <tr>
          <td>{service}</td>
        </tr>
        <tr>
          <td>{notes}</td>
        </tr>
      </tbody>
    </table>
  </>
);


export const AppointmentsDayView = (props) => {
  const { appointments = [] } = props;
  const [selected, setSelected] = useState(0);
  return < div id="appointmentsDayView" >
    <ol>
      {appointments.map((appointment, i) => (
        <li key={appointment.startsAt}>
          <button type="button" onClick={() => setSelected(i)}>
            {appointmentTimeOfDay(appointment.startsAt)}
          </button>
        </li>
      ))}
    </ol>
    {appointments.length === 0 ? (
      <p>
        There are no appointments scheduled for
        today.
      </p>
    ) : (
      <Appointment
        {...appointments[selected]}
      />
    )}
  </div>
};
