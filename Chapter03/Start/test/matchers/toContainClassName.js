import { matcherHint, printExpected, printReceived } from "jest-matcher-utils"

export const toContainClassName = (received, expectedText) => {
    const pass = received.className === (expectedText);
    const sourceHint = () => matcherHint("toContainClassName", "element", printExpected(expectedText), { isNot: pass });
    const actualTextHint = () => `Actual text: ${printReceived(received.className)}`;
    const message = () => [sourceHint(), actualTextHint()].join("\n\n");
    return { pass, message }
}