// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("charlie") === false

function palindrome(str) { 
//return true or false on if palindrome
    let reversed = '';

    for(let char of str){
        reversed = char + reversed;
    }

    return reversed == str ? true : false
}

module.exports = palindrome;
