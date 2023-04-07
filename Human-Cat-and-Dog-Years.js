/*
Human, Cat and Dog Years 🧑🏻🐱🐶
Mubashir has a cat and a dog. He purchased both of them at the same time humanYears ago.

Create a function which takes an argument of humanYears and returns [humanYears, catYears, dogYears] array.

Human Years:
Human Years >= 1
Human Years are whole numbers only.

Cat Years
15 cat years for first year.
+9 cat years for second year.
+4 cat years for each year after that.

Dog Years:
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

Examples:
calculateYears(1) ➞ [1, 15, 15]
calculateYears(2) ➞ [2, 24, 24]
calculateYears(10) ➞ [10, 56, 64] 
*/

// solution

const calculateYears = (humanYear) => {
  let catYears, dogYears;
  if (humanYear >= 1 && Number.isInteger(humanYear)) {
    if (humanYear === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYear === 2) {
      catYears = 15 + 9;
      dogYears = 15 + 9;
    } else {
      catYears = 24 + 4 * (humanYear - 2);
      dogYears = 24 + 5 * (humanYear - 2);
    }
  } else {
    return "Human Years are whole numbers only.";
  }
  return [humanYear, catYears, dogYears];
};

console.log(calculateYears(1));
console.log(calculateYears(2));
console.log(calculateYears(10));
console.log(calculateYears(20));
console.log(calculateYears(43));
console.log(calculateYears(65));
console.log(calculateYears(100));
