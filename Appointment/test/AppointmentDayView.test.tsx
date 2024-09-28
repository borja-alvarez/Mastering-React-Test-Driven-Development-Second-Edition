import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { act } from 'react';

import { Appointment, AppointmentsDayView, Customer } from "../src/AppointmentDayView";

const emptyCustomer: Customer = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
}

const emptyStylistName = "";
const emptyService = "";

const defaultAppointment = {
    customer: emptyCustomer,
    stylistName: emptyStylistName,
    service: emptyService,
}

describe("Appointment", () => {
    let container: HTMLDivElement;



    const render = (component: ReactNode) => act(() => ReactDOM.createRoot(container).render(component))

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    it("renders the customer first name", () => {
        const customer: Customer = { ...emptyCustomer, firstName: "Ashley" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body.textContent).toContain("Ashley");
    });

    it("renders another customer last name", () => {
        const customer: Customer = { ...emptyCustomer, firstName: "Jordan" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body.textContent).toContain("Jordan");
    });

    it("renders customer last name", () => {
        const customer: Customer = { ...emptyCustomer, lastName: "Smith" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body.textContent).toContain("Smith");
    });

    it("renders customer phone number", () => {
        const customer: Customer = { ...emptyCustomer, phoneNumber: "+34 789 654 123" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body.textContent).toContain("+34 789 654 123");
    });

    it("renders stylist name", () => {
        const stylistName = "Jhon"
        render(<Appointment {...defaultAppointment} stylistName={stylistName} />);
        expect(document.body.textContent).toContain(stylistName);
    });

    it("renders salon service", () => {
        const service = "Cut"
        render(<Appointment {...defaultAppointment} service={service} />);
        expect(document.body.textContent).toContain(service);
    });
});

describe("AppointmentsDayView", () => {
    let container: HTMLDivElement;

    const today = new Date();
    const twoAppointments = [
        {
            ...defaultAppointment,
            startsAt: today.setHours(12, 0),
            customer: { ...emptyCustomer, firstName: "Ashley", }
        },
        {
            ...defaultAppointment,
            startsAt: today.setHours(13, 0),
            customer: { ...emptyCustomer, firstName: "Jordan" }
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