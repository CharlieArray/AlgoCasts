// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    //first task is create an object of key: value pairs; with values being the # of occurances
        //{a:0,b:2,c:5,d:2}
        let values = {};

        for(let item of str){
            if(!values[item]){
                values[item] = 1;
            }
            else values[item]++;
        };


        //create baseline variables to compare values object 
        let maxValue = 0;
        let maxChar = "";

        //iterate through object to find max
        for(let item in values){
            if(values[item] > maxValue){
                maxValue = values[item];
                maxChar = item;
            }
        };

    return maxChar;

}

module.exports = maxChar;