/*
Two Makes Ten
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

Examples:
 => makesTen(9, 10) ➞ true
 => makesTen(9, 9) ➞ false
 => makesTen(1, 9) ➞ true
*/

//? solution
// const makesTen = (num1, num2) => {
//   const sum = num1 + num2;
//   if (sum === 10 || num1 === 10 || num2 === 10) {
//     return true;
//   } else {
//     return false;
//   }
// };

//! one line solution
const makesTen = (num1, num2) => num1 === 10 || num2 === 10 || num1 + num2 === 10;

console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));
console.log(makesTen(12, -2));
console.log(makesTen(10, 42));
