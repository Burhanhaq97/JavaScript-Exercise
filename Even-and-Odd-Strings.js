/*
Even and Odd Strings
Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

Examples:
evenOddString("mubashir") ➞ "mbsi uahr"
 Letters at even indexes = "mbsi"
 Letters at odd indexes = "uahr"
 Join both strings with a space

evenOddString("edabit") ➞ "eai dbt"
evenOddString("airforce") ➞ "aroc ifre"

Notes:
There will be no space in the given string.
*/

// solution

const evenOddString = (str) => {
  let evenString = [];
  let oddString = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      evenString.push(str.charAt(i));
    } else {
      oddString.push(str.charAt(i));
    }
  }
  return `${evenString.join("")} ${oddString.join("")}`;
};

console.log(evenOddString("airforce"));
console.log(evenOddString("mubashir"));
console.log(evenOddString("Wolfeschlegelsteinhausenbergerdorff"));
