/* 
Using the "&&" Operator
JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

Consider a && b:
=> a is checked if it is true or false.
=> If a is false, false is returned.
=> b is checked if it is true or false.
=> If b is false, false is returned.
=> Otherwise, true is returned (as both a and b are therefore true ).

The && operator will only return true for true && true.

Make a function using the && operator.

Examples:
=> and(true, false) ➞ false
=> and(true, true) ➞ true
=> and(false, true) ➞ false
=> and(false, false) ➞ false

*/

//? solution:
// const and = (val1, val2) => {
//   if (val1 && val2) {
//     return true;
//   } else {
//     return false;
//   }
// };

//! one line solution
const and = (val1, val2) => (val1 && val2 ? true : false);

console.log(and(true, false));
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));
