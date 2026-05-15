import { reverseString } from "./reverse-string";

describe("reverseString", () => {
    test("'hello, world!' converts to '!dlrow ,olleh'", () => {
        expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
    });
    test("'HELLO, WORLD!' converts to '!DLROW ,OLLEH'", () => {
        expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
    });
    test("int 123 converts to string 321", () => {
        expect(reverseString(123)).toBe("321");
    });
})