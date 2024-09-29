import { Appointment, AppointmentProps, AppointmentsDayView, Customer } from "../src/AppointmentDayView";
import { initializeReactContainer, container, render, click, elements, element, textOf, typesOf } from "./reactTestExtensions";

const emptyNote = "";
const emptyService = "";
const emptystartsAt = 0;
const emptyStylistName = "";
const emptyCustomer: Customer = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
}

const defaultAppointment: AppointmentProps = {
    customer: emptyCustomer,
    stylist: emptyStylistName,
    service: emptyService,
    notes: emptyNote,
    startsAt: emptystartsAt
}

describe("Appointment", () => {

    beforeEach(() => {
        initializeReactContainer();
    });

    it("renders the customer first name", () => {
        const customer: Customer = { ...emptyCustomer, firstName: "Ashley" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body).toContainText("Ashley");
    });

    it("renders another customer first name", () => {
        const customer: Customer = { ...emptyCustomer, firstName: "Jordan" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body).toContainText("Jordan");
    });

    it("renders customer last name", () => {
        const customer: Customer = { ...emptyCustomer, lastName: "Smith" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body).toContainText("Smith");
    });

    it("renders the customer phone number", () => {
        const customer: Customer = { ...emptyCustomer, phoneNumber: "+34 789 654 123" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body).toContainText("+34 789 654 123");
    });

    it("renders another customer phone number", () => {
        const customer: Customer = { ...emptyCustomer, phoneNumber: "234567890" }
        render(<Appointment {...defaultAppointment} customer={customer} />);
        expect(document.body).toContainText("234567890");
    });

    it("renders the stylist name", () => {
        const stylistName = "Jhon"
        render(<Appointment {...defaultAppointment} stylist={stylistName} />);
        expect(document.body).toContainText(stylistName);
    });

    it("renders another stylist name", () => {
        const stylistName = "Jo"
        render(<Appointment {...defaultAppointment} stylist={stylistName} />);
        expect(document.body).toContainText(stylistName);
    });

    it("renders the salon service", () => {
        const service = "Cut"
        render(<Appointment {...defaultAppointment} service={service} />);
        expect(document.body).toContainText(service);
    });

    it("renders another salon service", () => {
        const service = "Blow-dry"
        render(<Appointment {...defaultAppointment} service={service} />);
        expect(document.body).toContainText(service);
    });

    it("renders the appointment notes", () => {
        const notes = "Note about appointment"
        render(<Appointment {...defaultAppointment} notes={notes} />);
        expect(document.body).toContainText(notes);
    });

    it("renders other appointment notes", () => {
        const notes = "def"
        render(<Appointment {...defaultAppointment} notes={notes} />);
        expect(document.body).toContainText(notes);
    });

    it("renders an h3 element", () => {
        render(<Appointment {...defaultAppointment} />);
        expect(element("h3")).not.toBeNull();
    });

    it("renders the time as the heading", () => {
        const today = new Date();
        const startsAt = today.setHours(12, 0);
        render(<Appointment {...defaultAppointment} startsAt={startsAt} />);
        expect(element("h3")).toContainText("Today's appointment at 12:00");
    });

});

describe("AppointmentsDayView", () => {
    const secondButton = () => elements("button")[1];
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

    beforeEach(() => {
        initializeReactContainer();
    });

    it("renders a div with the right id", () => {
        render(<AppointmentsDayView />);
        expect(element("div#appointmentsDayView")).not.toBeNull();
    });

    it("renders an ol element to display appointments", () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(element("ol")).not.toBeNull();
    });

    it("renders an li for each appointment", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        expect(elements("ol > li")).toHaveLength(2);
    });

    it("renders the time of each appointment", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        expect(textOf(elements("li"))).toEqual(["12:00", "13:00"])
    });

    it("initially shows a message saying there are no appointment today", () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(document.body).toContainText("There are no appointments scheduled for today.");
    });

    it("selects the first appointment by default", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        expect(document.body).toContainText("Ashley");
        expect(document.body).not.toContainText("Jordan");
    });

    it("has a button element in each li", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        expect(typesOf(elements("li > button"))).toEqual(["button", "button"])
    });

    it("renders another appointment when selected", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        click(secondButton());
        expect(document.body).toContainText("Jordan");
    });

    it("adds toggled class to button when selected", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        click(secondButton());
        expect(secondButton()).toContainClassName("toggled");
    });

    it("does not add toggled class if button is not selected", () => {
        render(<AppointmentsDayView appointments={twoAppointments} />);
        expect(secondButton()).not.toContainClassName("toggled");
    });
});