import { AppointmentsDayView } from "./AppointmentDayView"
import ReactDOM from "react-dom/client"
import { sampleAppointments } from "./SampleData";

const rootElement = document.getElementById("root");

if (rootElement) {
    const rootComponent = ReactDOM.createRoot(rootElement);
    rootComponent.render(<AppointmentsDayView appointments={sampleAppointments} />);
} else {
    console.error("Not found element with 'root' id");
}