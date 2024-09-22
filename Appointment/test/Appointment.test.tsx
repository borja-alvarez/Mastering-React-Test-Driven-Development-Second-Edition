import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { act } from 'react';

import { Appointment } from "../src/Appointment";

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