import React from "react";
import { CustomerForm } from "../src/CustomerForm";
import {
    initializeReactContainer,
    render,
    form,
} from "./reactTestExtensions";



describe('ComponetForm', () => {
    beforeEach(() => {
        initializeReactContainer();
    });

    it('renders a form', () => {
        render(<CustomerForm />);
        expect(form()).not.toBeNull();
    });
})