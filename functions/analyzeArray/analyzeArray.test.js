import { analyzeArray } from "./analyzeArray";

describe("analyze array", () => {
    test("returns the average number", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
    });
    test("returns the min number", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
    });
    test("returns the max number", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
    });
    test("returns the length of the array", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
    });
    test("returns 'Invalid array' if at least one value is not a number", () => {
        expect(analyzeArray([1, 8, 3, "4", "2", "6"])).toBe("Invalid array");
    });
    test("returns 'Not an array' if input is not an array", () => {
        expect(analyzeArray("Hello, World!")).toBe("Not an array");
    });
});
