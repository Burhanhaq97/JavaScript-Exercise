/*
Convert a Number to Base-2
Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

Examples:
 => binary(1) ➞ "1"
 => binary(5) ➞ "101"
 => binary(10) ➞ "1010"

Notes:
 => Numbers will always be below 1024 (not including 1024).
 => If a binary conversion for 0 is attempted, return "0".
*/

//? solution
const binary = (decimal) => {
  if (decimal < 1024) {
    if (decimal == 0) {
      return "0";
    } else {
      return decimal.toString(2);
    }
  } else {
    return "enter some small number";
  }
};

console.log(binary(1));
console.log(binary(5));
console.log(binary(10));
console.log(binary(123));
console.log(binary(666));
