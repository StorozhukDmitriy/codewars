// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//Solution
function findShort(s) {
  const arr2 = [];
  const arr = s.split(" ");
  for (i = 0; i < arr.length; i++) {
    arr2.push(arr[i].length);
  }
  return Math.min(...arr2);
}
