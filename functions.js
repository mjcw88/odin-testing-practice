export function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase();
}

export function reverseString(str) {
    return str.split("").reverse().join("");
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
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

    let cipherText = "";
    let cipherChar = "";

    for (let i = 0; i < plainText.length; i++) {
        cipherChar = String.fromCharCode(rotate(plainText.charCodeAt(i), key));
        cipherText = cipherText + cipherChar;
    }
    return cipherText;
}

export function analyzeArray(array) {
    const obj = {
        average: array.reduce((a, b) => a + b) / array.length,
        min: array.reduce((a, b) => a < b ? a : b),
        max: array.reduce((a, b) => a > b ? a : b),
        length: array.length,
    }
    return obj;
}