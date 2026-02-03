/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  let wordsArray = input.split(" ");
  // console.log('ORIGINAL', wordsArray)
  // console.log(wordsArray[0][0].toUpperCase());
  for ( let i = 1; i< wordsArray.length; i++){
    // console.log(wordsArray[i][0].toUpperCase())
    wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1) ;
  }
  // console.log('AFTER' , wordsArray);
  return wordsArray.join("")
};

/* 
    Space / Memory Complexity:    O(n) ; n is the size of the input
    Time Complexity:              O(m) ; m is the size of the input

*/

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious
console.log(camelCase("a quick Brown fox Jumps over the lazy dog")); // supercalifragalisticexpialidocious

module.exports = camelCase;
