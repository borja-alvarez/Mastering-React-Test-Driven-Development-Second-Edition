import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment, AppointmentsDayView } from "../src/AppointmentsDaysView";

describe("Appointment", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component) =>
    act(() =>
      ReactDOM.createRoot(container).render(component)
    );

  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain(
      "Ashley"
    );
  });

  it("renders another customer first name", () => {
    const customer = { firstName: "Jordan" };

    render(<Appointment customer={customer} />);

    expect(document.body.textContent).toContain(
      "Jordan"
    );
  });

  it("renders the customer last name", () => {
    const customer = { lastName: "Cooper" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain(
      "Cooper"
    );
  });

  it("renders the customer phone number", () => {
    const customer = { phoneNumber: "+34 657 675 555" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain(
      "+34 657 675 555"
    );
  });

  it("renders stylist name, using the stylist field", () => {
    render(<Appointment stylist={"Aurelio"} />);
    expect(document.body.textContent).toContain("Aurelio");
  });

  it("renders saloon service, using the service field", () => {
    render(<Appointment service={"Cut"} />);
    expect(document.body.textContent).toContain("Cut");
  });

  it("renders Appointment notes, using the notes field", () => {
    render(<Appointment notes={"Crazy man"} />);
    expect(document.body.textContent).toContain("Crazy man");
  });

  it("renders Appointment time using startsAt field", () => {
    render(<Appointment startsAt={10} />);
    expect(document.body.textContent).toContain("10");
  });
});

describe("AppointmentsDayView", () => {
  let container;
  const today = new Date();
  const twoAppointments = [
    { customer: { firstName: "Ashley" }, startsAt: today.setHours(12, 0) },
    { customer: { firstName: "Jordan" }, startsAt: today.setHours(13, 0) },
  ];

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component) =>
    act(() =>
      ReactDOM.createRoot(container).render(component)
    );

  it("renders a div with the right id", () => {

    render(<AppointmentsDayView />);
    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointments", () => {
    render(<AppointmentsDayView />);
    const listElement = document.querySelector("ol");
    expect(listElement).not.toBeNull();
  });

  it("renders an li for each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const listElement = document.querySelectorAll("ol > li");
    expect(listElement).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    const listChildren = document.querySelectorAll("li");

    expect(listChildren[0].textContent).toContain("12:00");
    expect(listChildren[1].textContent).toContain("13:00");
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView />);

    expect(document.body.textContent).toContain("There are no appointments scheduled for today.");
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    expect(document.body.textContent).toContain("Ashley");
  });

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    const button = document.querySelectorAll("button")[1];
    act(() => button.click());

    expect(document.body.textContent).toContain("Jordan");
  });




});
