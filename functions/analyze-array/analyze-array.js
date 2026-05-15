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