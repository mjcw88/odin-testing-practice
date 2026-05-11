import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functions";

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

describe("caesar cipher", () => {
    test("'abc' with a key of 5 returns 'fgh'", () => {
        expect(caesarCipher("abc", 5)).toBe("fgh");
    });
    test("'xyz' with a key of 3 returns 'abc'", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc")
    });
    test("'Hello, World!' with a key of 3 returns 'Khoor, Zruog!'", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
    });
    test("'Hello, World!' with a key of -3 returns 'Ebiil, Tloia!'", () => {
        expect(caesarCipher("Hello, World!", -3)).toBe("Ebiil, Tloia!")
    });
    test("'H3110, W0r1d!' with a key of 3 returns 'K3110, Z0u1g!'", () => {
        expect(caesarCipher("H3110, W0r1d!", 3)).toBe("K3110, Z0u1g!")
    });
    test("'Hello, World!' with a string key of 3 returns 'Khoor, Zruog!'", () => {
        expect(caesarCipher("Hello, World!", "3")).toBe("Khoor, Zruog!")
    });
    test("'Hello, World!' with a float key of 3.14 returns 'Khoor, Zruog!'", () => {
        expect(caesarCipher("Hello, World!", 3.14)).toBe("Khoor, Zruog!")
    });
    test("'Hello, World!' with a string key of 'test' returns null", () => {
        expect(caesarCipher("Hello, World!", 'test')).toBe(null)
    });
    test("int 123 with a key of 3 returns 123", () => {
        expect(caesarCipher(123, 3)).toBe("123")
    });
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
    test("returns 'Invalid array' if at least one value is not a number", () => {
        expect(analyzeArray([1, 8, 3, "4", "2", "6"])).toBe("Invalid array");
    });
    test("returns 'Not an array' if input is not an array", () => {
        expect(analyzeArray("Hello, World!")).toBe("Not an array");
    });
});
