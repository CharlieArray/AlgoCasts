// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //split str into arr
    let strSplit = str.split(' ');
    //['a', 'short', 'sentence']

    return strSplit.map((el, idx, arr) => {
        return el[0].toUpperCase() + el.substring(1);
    }).join(" ")
}

module.exports = capitalize;
