//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//Solution
const mass = [2, 4, 5, 6, 7, 2];
function getAverage(marks) {
  let result = 0;
  for (i = 0; i < marks.length; i++) {
    result += marks[i] / marks.length;
  }
  return Math.floor(result);
}
