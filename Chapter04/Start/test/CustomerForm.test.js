import React from "react";
import { CustomerForm } from "../src/CustomerForm";
import { initializeReactContainer, render, form, field, element, click, submit, submitButton, change, labelFor } from "./reactTestExtensions";

const blankCustomer = {
  firstName: "",
  lastName: "",
};

const itRendersAsATextBox = (fieldName) =>
  it("renders as a text box", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(field(fieldName)).not.toBeNull();
    expect(field(fieldName).tagName).toEqual("INPUT");
    expect(field(fieldName).type).toEqual("text");
  });

const itIncludesTheExistingValue = (fieldName, value) =>
  it("includes the existing value", () => {
    render(<CustomerForm original={value} />);
    expect(field(fieldName).value).toEqual(value[fieldName]);
  });

const itRendersALabel = (fieldName, text) => {
  it("renders a label for the text box", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(labelFor(fieldName)).toBeTruthy();
  });

  it(`renders '${text}' as the label content`, () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(labelFor(fieldName)).toContainText(text);
  });
};

const itAssignsAnIdThatMatchesTheLabelId = (fieldName) =>
  it("assigns an id that matches the label id", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(field(fieldName).id).toEqual(fieldName);
  });

const itSubmitsExistingValue = (fieldName, value) =>
  it("saves existing value when submitted", () => {
    expect.hasAssertions();
    render(
      <CustomerForm
        original={value}
        onSubmit={(values) => {
          expect(values[fieldName]).toEqual(value[fieldName]);
        }}
      />
    );
    const button = element("input[type=submit]");
    click(button);
  });

const itSubmitsNewValue = (fieldName, value) =>
  it("saves new value when submitted", () => {
    expect.hasAssertions();
    render(
      <CustomerForm
        original={blankCustomer}
        onSubmit={(values) => {
          expect(values[fieldName]).toEqual(value[fieldName]);
        }}
      />
    );
    change(field(fieldName), value[fieldName]);
    click(submitButton());
  });

describe("ComponetForm", () => {
  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a form", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(form()).not.toBeNull();
  });

  it("renders a submit button", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(submitButton()).toBeTruthy();
  });

  it("prevents the default action when submitting the form", () => {
    render(<CustomerForm original={blankCustomer} onSubmit={() => {}} />);
    const event = submit(form());
    expect(event.defaultPrevented).toBe(true);
  });

  describe("first name field", () => {
    itRendersAsATextBox("firstName");
    itIncludesTheExistingValue("firstName", { firstName: "Ashley" });
    itRendersALabel("firstName", "First name");
    itAssignsAnIdThatMatchesTheLabelId("firstName");
    itSubmitsExistingValue("firstName", { firstName: "Ashley" });
    itSubmitsNewValue("firstName", { firstName: "Jamie" });
  });

  describe("last name field", () => {
    itRendersAsATextBox("lastName");
    itIncludesTheExistingValue("lastName", { lastName: "Smith" });
    itRendersALabel("lastName", "Last name");
    itAssignsAnIdThatMatchesTheLabelId("lastName");
    itSubmitsExistingValue("lastName", { lastName: "Smith" });
    itSubmitsNewValue("lastName", { lastName: "Freeman" });
  });

  describe("phone number field", () => {
    itRendersAsATextBox("phoneNumber");
    itIncludesTheExistingValue("phoneNumber", { phoneNumber: "012345" });
    itRendersALabel("phoneNumber", "Phone number");
    itAssignsAnIdThatMatchesTheLabelId("phoneNumber");
    itSubmitsExistingValue("phoneNumber", { phoneNumber: "012345" });
    itSubmitsNewValue("phoneNumber", { phoneNumber: "543210" });
  });
});
