/*
Multiple of 100
Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

Examples:
 => divisible(1) ➞ false
 => divisible(1000) ➞ true
 => divisible(100) ➞ true

Notes:
 => Don't forget to return the result.
*/

//? solution
const divisible = (num) => num % 100 == 0;

console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));
