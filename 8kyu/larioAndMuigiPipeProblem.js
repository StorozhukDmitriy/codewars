console.log("heeee")
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8l
let numbers = [1, 2, 4, 5, 6, 8, 9, 11, 12];

function pipeFix(numbers) {
    const maxValue = Math.max.apply(null, numbers);
    const minValue = Math.min.apply(null, numbers);
    const range = (start, end) => [...Array(end - start + 1
).
    keys()

].

    map(n => n + start);
    const result = range(minValue, maxValue);
    return result
}
console.log(pipeFix(numbers));
