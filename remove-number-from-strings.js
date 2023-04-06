/*
remove number from strings
Create a function that takes string as arguments and remove number from given arguments.

Examples:
removeNumbers("mubashir1") ➞ "mubashir"
removeNumbers("12ma23tt") ➞ "matt"
removeNumbers("e1d2a3b4i5t6") ➞ "edabit"
*/

// solution

const removeNumbers = (str) => {
  return str.replace(/[0-9]/g, "");
};

console.log(removeNumbers("mubashir1"));
console.log(removeNumbers("12ma23tt"));
console.log(removeNumbers("e1d2a3b4i5t6"));
