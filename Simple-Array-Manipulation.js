/*
Simple Array Manipulation
create a function incrementItems! It is intended to add 1 to every element in the array!

Examples:
 => incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
 => incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
 => incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
*/

//? solution
// const incrementItems = (arr) => {
//   const updateArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     updateArr.push(arr[i] + 1);
//   }
//   return updateArr;
// };


//! one line solution
const incrementItems = (arr) => arr.map((val) => val + 1);

console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));
