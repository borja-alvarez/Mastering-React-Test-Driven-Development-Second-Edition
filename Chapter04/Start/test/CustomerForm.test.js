import React from "react";
import { CustomerForm } from "../src/CustomerForm";
import {
  initializeReactContainer,
  render,
  form,
} from "./reactTestExtensions";

describe("ComponetForm", () => {
  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a form", () => {
    render(<CustomerForm />);
    expect(form()).not.toBeNull();
  });

  it("renders the first name field as a text box", () => {
    render(<CustomerForm />);
    const field = form().elements.firstName;

    expect(field).not.toBeNull();
    expect(field.tagName).toEqual("INPUT");
    expect(field.type).toEqual("text");
  });
});
