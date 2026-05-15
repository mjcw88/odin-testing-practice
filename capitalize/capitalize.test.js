import { capitalize } from "./capitalize";

describe("capitalize", () => {
    test("'hello, world!' converts to 'Hello, world!'", () => {
        expect(capitalize("hello, world!")).toBe("Hello, world!");
    });
    test("'Hello, world!' converts to 'Hello, world!'", () => {
        expect(capitalize("Hello, world!")).toBe("Hello, world!");
    });
    test("'HELLO, WORLD!' converts to 'Hello, world!'", () => {
        expect(capitalize("HELLO, WORLD!")).toBe("Hello, world!");
    });
    test("'|-|ello, world!' converts to '|-|ello, world!'", () => {
        expect(capitalize("|-|ello, world!")).toBe("|-|ello, world!");
    });
    test("'4ello, world!' converts to '4ello, world!'", () => {
        expect(capitalize("4ello, world!")).toBe("4ello, world!");
    });
    test("'int 123 converts to string 123'", () => {
        expect(capitalize(123)).toBe("123");
    });
});