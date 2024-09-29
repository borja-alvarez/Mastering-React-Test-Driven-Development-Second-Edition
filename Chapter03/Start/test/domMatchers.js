import { toContainClassName } from "./matchers/toContainClassName";
import { toContainText } from "./matchers/toContainText";

expect.extend({
    toContainText,
    toContainClassName
})