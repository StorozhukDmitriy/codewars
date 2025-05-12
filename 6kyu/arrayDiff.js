// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
//
//     Examples
//      If a = [1, 2] and b = [1], the result should be [2].
//
//     If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].


//  let res = []
// for (let i = 0; i < b.length; i++){
//    res = a.filter(el=> el !== b[i])
// }
//  return res

const a = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4]
const b = [2, 4]


function arrayDiff(a, b) {
    let n = 0
    if (b === []) return;
    copy = a.filter(el => el !== b[n])
    console.log(a)
    return arrayDiff(a, b.shift());
}
const func = arrayDiff(a,b)
console.log(func())


console.log(arrayDiff(a, b))