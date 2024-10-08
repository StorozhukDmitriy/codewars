// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

//Solution 
const arr = ["a", 1, 2, false, "b"];
function separateTypes(input) {
  let obj = {};
  const arrString = [];
  const arrNumber = [];
  const arrBool = [];
  for (i = 0; i < input.length; i++) {
    if (typeof input[i] === "string") {
      arrString.push(input[i]);
      obj.string = arrString;
    } else if (typeof input[i] === "number") {
      arrNumber.push(input[i]);
      obj.number = arrNumber;
    } else if (typeof input[i] === "boolean") {
      arrBool.push(input[i]);
      obj.boolean = arrBool;
    }
  }

  return obj;
}
console.log(separateTypes(arr));