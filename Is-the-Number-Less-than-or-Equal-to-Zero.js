/*
Is the Number Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples:
lessThanOrEqualToZero(5) ➞ false
lessThanOrEqualToZero(0) ➞ true
lessThanOrEqualToZero(-2) ➞ true

Notes:
Don't forget to return the result.
*/

// solution
const lessThanOrEqualToZero = (num) => {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
};

// one line solution
// const lessThanOrEqualToZero = (num) => (num <= 0 ? true : false);

console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));
