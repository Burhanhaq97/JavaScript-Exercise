/* 
How Many Vowels?
Create a function that takes a string and returns the number (count) of vowels contained within it.

Examples:
 => countVowels("Celebration") ➞ 5
 => countVowels("Palm") ➞ 1
 => countVowels("Prediction") ➞ 4

Notes:
 => a, e, i, o, u are considered vowels (not y).
 => All test cases are one word and only contain letters.
*/

//? solution
const countVowels = (str) => {
  const strToArr = str.split("");
  const vowelCount = strToArr.filter((char) => {
    const lowerCaseChar = char.toLowerCase();
    return (
      lowerCaseChar === "a" ||
      lowerCaseChar === "e" ||
      lowerCaseChar === "i" ||
      lowerCaseChar === "o" ||
      lowerCaseChar === "u"
    );
  }).length;
  return vowelCount;
};

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));
