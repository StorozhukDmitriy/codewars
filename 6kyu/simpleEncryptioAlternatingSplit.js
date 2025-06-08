//Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
//
// Examples:
//
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
//
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
//
// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// encrypt("012345", 1)

function encrypt(text, n) {
    if (n === 0) {
        return text;
    }
    let arr1 = []
    let arr2 = [];
    text = (text).split('')
    text.map((el, i) => i % 2 !== 0 ? arr1.push(el) : arr2.push(el))

    text = [...arr1, ...arr2].map(el => el.toString()).join('')

    return encrypt(text, n - 1)
}



let encryptedText = encrypt("012345", 1)//135024
console.log(encryptedText)
function decrypt(encryptedText, n) {
     if(!encryptedText || !n) return encryptedText;

}

console.log(decrypt(encryptedText, 1));
