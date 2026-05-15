import { caesarCipher } from "./caesar-cipher";

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