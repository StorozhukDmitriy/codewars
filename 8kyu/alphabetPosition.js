// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//Solution
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(function (s) {
      return s.charCodeAt(0) - 96;
    })
    .join(" ");
}
