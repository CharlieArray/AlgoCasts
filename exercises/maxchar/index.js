// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //iterate through chars of string
    //if key is not assigned in a let result =[]
    //assign key value pairs

    let values = {};
    let max = 0;
    let maxValue = ''

    for(let char of str){
        if(!values[char]){
            values[char] = 1
        }
        else values[char]++
        console.log(values)
    }

    for(let char in values){
        if(values[char] > max){
            max = values[char]
            maxValue = char
        } 
    }
    return maxValue
}

module.exports = maxChar;
