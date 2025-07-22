//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321

//Solution

function descendingOrder(n) {
    const arr = n.toString().split("").map(n => Number(n));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return  Number(arr.join(""));
}