// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //str => str array => key/value pairs => items object
    let items = {};

    for (let char of str) {
        if (!items[char]) {
            items[char] = 1
        }
        else items[char]++
    }

    //find max occurances, and what key has the max occurances
    //create baseline to compare
    let maxValue = 0
    let maxChar = ''

    //iterate through object and 
    for (let item in items) {
        if (items[item] > maxValue) {
            maxValue = items[item]
            maxChar = item
        }
    }
    return maxChar
}

module.exports = maxChar;
