/*
Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

Examples:
 => divisibleByFive(5) ➞ true
 => divisibleByFive(-55) ➞ true
 => divisibleByFive(37) ➞ false

Notes:
 => Don't forget to return the result.
*/

//? solution
const divisibleByFive = (num) => {
  return num % 5 == 0 || num % 5 === 5;
};

console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));
