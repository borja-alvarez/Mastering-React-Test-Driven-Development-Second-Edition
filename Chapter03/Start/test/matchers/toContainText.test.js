import { toContainText } from "./toContainText"

const stripTerminalColor = (text) => {
    return text.replace(/\x1B\[\d+m/g, "")
}

describe('toContainText matcher', () => {
    it('return pass is true when text is found in the given DOM element', () => {
        const domElement = { textContent: "text to find" };
        const result = toContainText(domElement, "text to find");
        expect(result.pass).toBe(true);
    });

    it('return pass is false when text is not found in the given DOM element', () => {
        const domElement = { textContent: "" };
        const result = toContainText(domElement, "text to find");
        expect(result.pass).toBe(false);
    });

    it('return a message that contains the source line if no match', () => {
        const domElement = { textContent: "" };
        const result = toContainText(domElement, "text to find");
        expect(stripTerminalColor(result.message()))
            .toContain("expect(element).toContainText(\"text to find\")");
    });

    it('return a message that contains the source line if negated match', () => {
        const domElement = { textContent: "text to find" };
        const result = toContainText(domElement, "text to find");
        expect(stripTerminalColor(result.message()))
            .toContain("expect(element).not.toContainText(\"text to find\")");
    });

    it('return a message that contains the actual text', () => {
        const domElement = { textContent: "text to find" };
        const result = toContainText(domElement, "text to find");
        expect(stripTerminalColor(result.message()))
            .toContain("Actual text: \"text to find\"");
    });
})