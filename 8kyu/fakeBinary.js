// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//Solution
function fakeBin(x) {
  let arr = x.split("");
  let arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr2.push("0");
    } else {
      arr2.push("1");
    }
  }
  return arr2.join("");
}
