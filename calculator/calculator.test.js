import { calculator } from "./calculator";

describe("calculator", () => {
    test("2 + 2 = 4", () => {
        expect(calculator.add(2, 2)).toBe(4);
    });
    test("-1 + 3 = 2", () => {
        expect(calculator.add(-1, 3)).toBe(2);
    });
    test("-5 + 3 = -2", () => {
        expect(calculator.add(-5, 3)).toBe(-2);
    });
    test("1.5 + 1 = 2.5", () => {
        expect(calculator.add(1.5, 1)).toBe(2.5);
    });
    test("'Hello' + 'World!' returns NaN'", () => {
        expect(calculator.add("Hello", "Hello")).toBe(NaN);
    });
    test("3 - 1 = 2", () => {
        expect(calculator.subtract(3, 1)).toBe(2);
    });
    test("-3 - 2 = -5", () => {
        expect(calculator.subtract(-3, 2)).toBe(-5);
    });
    test("3 - 5 = -2", () => {
        expect(calculator.subtract(3, 5)).toBe(-2);
    });
    test("1.5 - 1 = 0.5", () => {
        expect(calculator.subtract(1.5, 1)).toBe(0.5);
    });
    test("'Hello' - 'World!' returns NaN'", () => {
        expect(calculator.subtract("Hello", "Hello")).toBe(NaN);
    });
    test("12 / 3 = 4", () => {
        expect(calculator.divide(12, 3)).toBe(4);
    });
    test("-12 / 3 = -4", () => {
        expect(calculator.divide(-12, 3)).toBe(-4);
    });
    test("3 / 12 = 0.25", () => {
        expect(calculator.divide(3, 12)).toBe(0.25);
    });
    test("-3 / 12 = 0.25", () => {
        expect(calculator.divide(-3, 12)).toBe(-0.25);
    });
    test("'Hello' / 'World!' returns NaN'", () => {
        expect(calculator.divide("Hello", "Hello")).toBe(NaN);
    });
    test("6 * 2 = 12", () => {
        expect(calculator.multiply(6, 2)).toBe(12);
    });
    test("-6 * 2 = -12", () => {
        expect(calculator.multiply(-6, 2)).toBe(-12);
    });
    test("6 * 0 = 0", () => {
        expect(calculator.multiply(6, 0)).toBe(0);
    });
    test("6.5 * 2 = 13", () => {
        expect(calculator.multiply(6.5, 2)).toBe(13);
    });
    test("'Hello' * 'World!' returns NaN'", () => {
        expect(calculator.multiply("Hello", "Hello")).toBe(NaN);
    });
});
