//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//Solution
function toCamelCase(str) {
    const arr = str.replace(/[-_]/g, " ").split(' ');
    console.log(arr)
    const result = arr.map(el => el.charAt(0).toUpperCase() + el.substring(1)).join('');
    for (let i = 0; i < arr.length; i++) {
    }
    return result.charAt(0) === str.charAt(0) ? result : result.charAt(0).toLowerCase() + result.slice(1);
}