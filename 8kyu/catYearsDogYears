// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year

//Solution
var humanYearsCatYearsDogYears = function (humanYears) {
  let catYear = 0;
  let dogyYear = 0;
  let resut = [];
  let count = 0;
  while (count <= humanYears) {
    if (humanYears === 1) {
      catYear = 15;
      dogyYear = 15;
      count++;
    } else if (humanYears === 2) {
      catYear = 24;
      dogyYear = 24;
      count++;
    } else {
      catYear = 24 + (humanYears - 2) * 4;
      dogyYear = 24 + (humanYears - 2) * 5;
      count++;
    }
  }
  resut.push(humanYears);
  resut.push(catYear);
  resut.push(dogyYear);

  return resut;
};
