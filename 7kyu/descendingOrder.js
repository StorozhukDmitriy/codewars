// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//Solution
let b = 56742145;
let result = null;
function descendingOrder(n) {
  let arr = Array.from(n.toString());
  arr.sort((a, b) => b - a);
  result = arr.join("");
  return Number(result);
}
console.log(descendingOrder(b));
