import { ReactNode } from 'react';
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

export let container: HTMLDivElement;

export const initializeReactContainer = () => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
};

export const render = (component: ReactNode) => {
    act(() => ReactDOM.createRoot(container).render(component))
}

export const click = (element: HTMLButtonElement) => {
    act(() => element.click())
};