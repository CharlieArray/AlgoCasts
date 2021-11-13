// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let values = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (!values[char]) {
            values[char] = 1;
        }
        else values[char]++
    }

    for (let char in values) {
        if (values[char] > max) {
            max = values[char];
            maxChar = char;
        }
    }

    return maxChar
}

module.exports = maxChar;
