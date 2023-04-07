/*
Next Perfect Square

Create a function which takes a given number n and returns next integral perfect square number. Return null if the given number is not a perfect square.

Examples:
nextSquare(121) ➞ 144
nextSquare(625) ➞ 676
nextSquare(114) ➞ null
 114 is not a perfect square
*/

// solution
const nextSquare = (num) => {
  const perfectSquare = Math.pow(Math.sqrt(num) + 1, 2);
  if (Number.isInteger(perfectSquare)) {
    return perfectSquare;
  } else {
    return null;
  }
};

console.log(nextSquare(121));
console.log(nextSquare(625));
console.log(nextSquare(114));
console.log(nextSquare(15241383936));
console.log(nextSquare(342786627));


/*
To find the next perfect square after a given number, you can follow these steps:

1. Take the square root of the given number.
2. Add 1 to the result of the square root.
3. Square the result obtained in step 2.

The result of step 3 will be the next perfect square after the given number.

For example, if the given number is 36, the square root of 36 is 6. Adding 1 to 6 gives 7. Squaring 7 gives 49, which is the next perfect square after 36.
 */