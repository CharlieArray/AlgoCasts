// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {

    //create a list with a count for each unique value
    //ex. {a: 5, b: 3, c: 1, d: 0, 1: 3}

    let list = {}

    for (let char of str) {
        if (!list[char]) {
            list[char] = 1
        }
        else list[char]++
    }

    let maxValue = 0;
    let maxChar = ""

    for (let char in list) {
        if (list[char] >= maxValue) {
            maxValue = list[char];
            maxChar = char;
        }
    }
    return maxChar
}

module.exports = maxChar;
