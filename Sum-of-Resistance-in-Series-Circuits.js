/*
Sum of Resistance in Series Circuits
When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

RT = R1 + R2 + R3 ...

Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

Examples:
 => seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"
 => seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"
 => seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"

Notes:
 => All inputs will be valid.
 => Notice the singular ohm for values <= 1.
 => This challenge was inspired by Joshua Señoron's Python Sum of Resistance in Parallel Circuits challenge. You can find it here.
*/

//? solution:
// const seriesResistance = (arr) => {
//   let total;
//   arr.reduce((accumulator, currentValue) => {
//     return total = accumulator + currentValue;
//   });
//   return `${total} ${total <= 1 ? 'ohm': 'ohms'}`;
// };



//! solution 2:
const seriesResistance = (arr) => {
  const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  const unit = total <= 1 ? "ohm" : "ohms";
  return `${total} ${unit}`
};


console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));
console.log(seriesResistance([0.5, 0.5]));
