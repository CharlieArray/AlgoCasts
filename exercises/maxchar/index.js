// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   //count values by key:value pairs
    let object = {}

    for(let item of str){
        if(!object[item]) {
            object[item] = 1
            }
        else object[item]++
        }

    //object ex = {a: 1, b:1, c: 6}    

    let maxValue = 0;
    let maxChar = "" 

    //find key with largest value 
        //iterate through object
        for(let item in object){
            if(object[item] > maxValue){
                maxValue = object[item];
                maxChar = item;
            }
        }
    return maxChar;
}

module.exports = maxChar;
