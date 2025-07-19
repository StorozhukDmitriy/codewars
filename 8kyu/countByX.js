//Create a function with two arguments that will return an array of the first n multiples of x.
//
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
    let lenght = x * n
    let count = 0
    const result = []
    while (count < lenght) {
        count = count + x
        result.push(count)
    }
    return result
}

console.log(countBy(1,10))