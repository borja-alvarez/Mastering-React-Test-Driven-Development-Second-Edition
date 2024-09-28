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

    const today = new Date();
    const twoAppointments = [
        {
            startsAt: today.setHours(12, 0),
            customer: { firstName: "Ashley" }
        },
        {
            startsAt: today.setHours(13, 0),
            customer: { firstName: "Jordan" }
        }
    ];

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
        const listElement = document.querySelectorAll("ol");
        expect(listElement).not.toBeNull();
    });

    it("renders an li for each appointment", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        const listElement = document.querySelectorAll("li");
        expect(listElement).toHaveLength(2);
    });

    it("renders the time of each appointment", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        const listElement = document.querySelectorAll("li");

        expect(listElement[0].textContent).toEqual("12:00");
        expect(listElement[1].textContent).toEqual("13:00");
    });

    it("initially shows a message saying there are no appointment today", () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(document.body.textContent).toContain("There are no appointments scheduled for today.");
    });

    it("selects the first appointment by default", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        expect(document.body.textContent).toContain("Ashley");
        expect(document.body.textContent).not.toContain("Jordan");
    });

    it("has a button element in each li", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        const buttons = document.querySelectorAll("li > button");
        expect(buttons).toHaveLength(2);
        expect(buttons[0].getAttribute("type")).toEqual("button");
    });

    it("renders another appointment when selected", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        const buttons = document.querySelectorAll("button")[1];
        act(() => buttons.click());
        expect(document.body.textContent).toContain("Jordan");
    });
});