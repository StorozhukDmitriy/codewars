//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


//Solution
function pigIt(str) {
    const arr = str.split(' ');
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
        let firstSymbol = arr[i].slice(0, 1)
        if ((arr[i] === "!") || (arr[i] === "?")) {
            arr2.push(arr[i]);
        } else {
            arr2.push(arr[i].substring(1) + firstSymbol + "ay");
        }

    }
    return arr2.join(' ');
}
