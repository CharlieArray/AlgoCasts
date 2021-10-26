// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //split the string into arr by the space
       let strArr = str.split(' ');
    //loop through each index position, and capitalize arr[0] toUpperCase() and include substring of second part of string in each index
       strArr.forEach((element,index,strArr)=>{
        strArr[index] = `${element.toUpperCase()[0]}${element.substring(1,)}`
       })
   return strArr.join(' ')
}

module.exports = capitalize;
