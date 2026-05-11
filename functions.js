export function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase();
}

export function reverseString(str) {
    return String(str).split("").reverse().join("");
}

export const calculator = {
    add: (a, b) => parseFloat(a) + parseFloat(b),
    subtract: (a, b) => parseFloat(a) - parseFloat(b),
    divide: (a, b) => parseFloat(a) / parseFloat(b),
    multiply: (a, b) => parseFloat(a) * parseFloat(b),
}

export function caesarCipher(plainText, key) {
    function rotate(char, key) {
        const c = String.fromCharCode(char);

        if (c >= "A" && c <= "Z") {
            return (char - 65 + key) % 26 + 65;
        }

        if (c >= "a" && c <= "z") {
            return (char - 97 + key) % 26 + 97;
        }
        return char;
    }

    key = parseInt(key);
    if (isNaN(key)) return null;

    let cipherText = "";
    let cipherChar = "";

    plainText = String(plainText);

    for (let i = 0; i < plainText.length; i++) {
        cipherChar = String.fromCharCode(rotate(plainText.charCodeAt(i), key));
        cipherText = cipherText + cipherChar;
    }
    return cipherText;
}

export function analyzeArray(array) {
    if (!Array.isArray(array)) return "Not an array";
    if (!array.every(v => typeof v === "number")) return "Invalid array";

    const obj = {
        average: array.reduce((a, b) => a + b) / array.length,
        min: array.reduce((a, b) => a < b ? a : b),
        max: array.reduce((a, b) => a > b ? a : b),
        length: array.length,
    }
    return obj;
}