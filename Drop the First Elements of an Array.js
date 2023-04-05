/* 
Learn Lodash: _.drop, Drop the First Elements of an Array
According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

Your challenge is to write your own version using vanilla JavaScript.

Examples:
drop([1, 2, 3], 1) ➞ [2, 3]
drop([1, 2, 3], 2) ➞ [3]
drop([1, 2, 3], 5) ➞ []
drop([1, 2, 3], 0) ➞ [1, 2, 3]

Notes:
Do not attempt to import lodash; you are simply writing your own version.
*/


// solution
const drop = (arr,val) => {
    return arr.slice(val)
}
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));
console.log(drop(["banana", "orange", "watermelon", "mango"], 2));