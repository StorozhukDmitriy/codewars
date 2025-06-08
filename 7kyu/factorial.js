// Your task is to write function factorial.

//Solution

function factorial(n){
    return n > 1 ? n * factorial(n - 1) : 1
}