import React from "react";
import ReactDOM from "react-dom/client";
import { AppointmentsDayView } from "./Appointment";
import { sampleAppointments } from "./sampleData";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppointmentsDayView appointments={sampleAppointments} />);
