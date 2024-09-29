// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//Solution
function doubleChar(str) {
  const arr = str.slice("");
  const arr2 = [];
  for (i = 0; i < arr.length; i++) {
    arr2.push(arr[i] + arr[i]);
  }
  return arr2.join("");
}
