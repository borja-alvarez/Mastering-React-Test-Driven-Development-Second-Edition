import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { act } from 'react';

import { Appointment, AppointmentsDayView } from "../src/Appointment";

describe("Appointment", () => {
    let container: HTMLDivElement;

    const render = (component: ReactNode) => act(() => ReactDOM.createRoot(container).render(component))

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    it("renders the customer first name", () => {
        const customer = { firstName: "Ashley" }
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Ashley");
    });

    it("renders another customer first name", () => {
        const customer = { firstName: "Jordan" }
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Jordan");
    });
});

describe("AppointmentsDayView", () => {
    let container: HTMLDivElement;

    const render = (component: ReactNode) => act(() => ReactDOM.createRoot(container).render(component))

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    it("renders a div with the right id", () => {
        render(<AppointmentsDayView />);
        expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
    });

    it("renders an ol element to display appointments", () => {
        render(<AppointmentsDayView appointments={[]} />);
        const listElement = document.querySelectorAll("ol")
        expect(listElement).not.toBeNull();
    });

    it("renders an li for each appointment", () => {
        const today = new Date();
        const twoAppointments = [
            { startsAt: today.setHours(12, 0) },
            { startsAt: today.setHours(13, 0) }
        ];
        render(<AppointmentsDayView appointments={twoAppointments} />);
        const listElement = document.querySelectorAll("li")
        expect(listElement).toHaveLength(2)
    });


});