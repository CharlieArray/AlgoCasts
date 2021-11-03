// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    //regex of everything but A-Z a-z
    let regex = /[^A-Za-z]/

    let stringAfinal= stringA.replace(regex, '').split('').sort().join('');
    let stringBfinal = stringB.replace(regex, '').split('').sort().join('');
    
    //ternary operator 
     return stringAfinal == stringBfinal ? true: false
}

module.exports = anagrams;
