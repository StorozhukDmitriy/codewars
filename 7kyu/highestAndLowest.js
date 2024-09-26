// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//Solution
function highAndLow(numbers) {
  const number = numbers.split(" ");
  for (i = 0; i < number.length; i++) {
    number[i] = Number(number[i]);
  }
  const maxValue = Math.max(...number);
  const minValue = Math.min(...number);
  console.log(number);

  return `${maxValue} ${minValue}`;
}

console.log(highAndLow("1 2 3 4 5"));
