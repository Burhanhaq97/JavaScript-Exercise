/*
Invert an Array
Create a function that takes an array of numbers arr and returns an inverted array.

Examples:
invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
invertArray([]) ➞ []

Notes:
Don't forget to return the result.
*/

// solution

const invertArray = (arr) => {
 return arr.map((val) => -val);
};

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));
