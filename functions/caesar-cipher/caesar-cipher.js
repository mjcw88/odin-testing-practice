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