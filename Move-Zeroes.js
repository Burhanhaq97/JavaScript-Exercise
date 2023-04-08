/*
Move Zeroes
Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

Examples:
moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]
moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]
moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
*/

// solution

const moveZeros = (arr) => {
  let zeros = [];
  let nonZeros = [];
  arr.map((val) => {
    if (val === 0) {
      zeros.push(val);
    } else {
      nonZeros.push(val);
    }
  });
  return nonZeros.concat(zeros);
};

console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(moveZeros([0, 1, null, 2, false, 1, 0]));
console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));
