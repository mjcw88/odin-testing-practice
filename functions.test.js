import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functions";

test("capitalizes first letter of string", () => {
    expect(capitalize("hello, world!")).toBe("Hello, world!");
});

test("reverses string", () => {
    expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
});

describe("calculator", () => {
    test("add() returns the sum of two numbers", () => {
        expect(calculator.add(2, 2)).toBe(4);
    });
    test("subtract() returns the subtraction of two numbers", () => {
        expect(calculator.subtract(3, 1)).toBe(2);
    });
    test("divide() returns the division of two numbers", () => {
        expect(calculator.divide(12, 3)).toBe(4);
    });
    test("multiply() returns the multiplication of two numbers", () => {
        expect(calculator.multiply(6, 2)).toBe(12);
    });
});

describe("caesar cipher", () => {
    test("returns basic cipher of key", () => {
        expect(caesarCipher("abc", 5)).toBe("fgh");
    });
    test("returns cipher that wraps around", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc")
    });
    test("punctuation, spaces, and other non-alphabetical characters remain unchanged", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
    })
});

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
});
