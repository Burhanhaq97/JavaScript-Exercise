/*
Convert Hours and Minutes into Seconds
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples:
 => convert(1, 3) ➞ 3780
 => convert(2, 0) ➞ 7200
 => convert(0, 0) ➞ 0

Notes:
 => Don't forget to return the result.
*/

//? solution

const convert = (hours, minutes) => {
  if (Number.isInteger(hours) && Number.isInteger(minutes)) {
    const totalMinutes = hours * 60 + minutes;
    return totalMinutes * 60;
  }
};

console.log(convert(1, 3));
console.log(convert(2, 0));
console.log(convert(0, 0));
