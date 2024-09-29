declare global {
    namespace jest {
        interface Matchers<R> {
            toContainText(expectedText: string): R;
            toContainClassName(expectedText: string): R;
        }
    }
}

export { };