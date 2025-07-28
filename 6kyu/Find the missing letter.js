//Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
//
// Example:
//
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!

//Solution
function findMissingLetter(array) {
    const array2 = array[0] === array[0].toUpperCase() ? array.map(el => el.toLowerCase()) : array;
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const startIndex = alphabet.indexOf(array2[0]);
    const endIndex = alphabet.indexOf(array2[array2.length - 1]);
    const slice = alphabet.slice(startIndex, endIndex + 1);

    return array[0] === array[0].toUpperCase() ?
        slice.filter(el => !array2.includes(el)).join().toUpperCase()
        :
        slice.filter(el => !array2.includes(el)).join()

}