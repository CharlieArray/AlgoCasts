// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //we need to create key:value pairs, with values being occurances
  //{a:2, b:4, c:6}

  let object = {};

  //iterate through string
  for (let char of str) {
    if (!object[char]) {
      object[char] = 1;
    } else object[char]++;
  }

  //iterate through object to see what is highest
  let maxItem = "";
  let maxUsed = 0;

  for (let item in object) {
    if (object[item] > maxUsed) {
      maxUsed = object[item];
      maxItem = item;
    }
  }

  return maxItem;
}

module.exports = maxChar;
