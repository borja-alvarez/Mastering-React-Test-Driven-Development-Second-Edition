import React from "react";
import ReactDOM from "react-dom/client";
import { AppointmentsDayView } from "./AppointmentsDayView";
import { sampleAppointments } from "./sampleData";
import { CustomerForm } from "./CustomerForm";

// ReactDOM.createRoot(
//   document.getElementById("root")
// ).render(
//   <AppointmentsDayView
//     appointments={sampleAppointments}
//   />
// );

ReactDOM.createRoot(document.getElementById("root")).render(<CustomerForm onSubmit={console.log} />);
