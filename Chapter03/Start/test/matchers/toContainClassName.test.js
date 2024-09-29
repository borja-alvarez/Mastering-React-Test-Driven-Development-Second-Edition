import { toContainClassName } from "./toContainClassName"

const stripTerminalColor = (text) => {
    return text.replace(/\x1B\[\d+m/g, "")
}

describe('toContainClassName matcher', () => {
    it('return pass is true when className is found in the given DOM element', () => {
        const domElement = { className: "text to find" };
        const result = toContainClassName(domElement, "text to find");
        expect(result.pass).toBe(true);
    });

    it('return pass is false when className is not found in the given DOM element', () => {
        const domElement = { className: "" };
        const result = toContainClassName(domElement, "text to find");
        expect(result.pass).toBe(false);
    });

    it('return a message that contains the source line if no match', () => {
        const domElement = { className: "" };
        const result = toContainClassName(domElement, "text to find");
        expect(stripTerminalColor(result.message()))
            .toContain("expect(element).toContainClassName(\"text to find\")");
    });

    it('return a message that contains the source line if negated match', () => {
        const domElement = { className: "text to find" };
        const result = toContainClassName(domElement, "text to find");
        expect(stripTerminalColor(result.message()))
            .toContain("expect(element).not.toContainClassName(\"text to find\")");
    });

    it('return a message that contains the actual className', () => {
        const domElement = { className: "text to find" };
        const result = toContainClassName(domElement, "text to find");
        expect(stripTerminalColor(result.message()))
            .toContain("Actual text: \"text to find\"");
    });
})