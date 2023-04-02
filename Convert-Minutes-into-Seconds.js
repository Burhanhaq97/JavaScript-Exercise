// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

// Notes:
// Don't forget to return the result.



// solution
const convert = (minute) => {
  if (minute > 0) {
    return minute * 60;
  }
};

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));