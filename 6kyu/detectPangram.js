// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//Solution
function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const regex = /\s/g;
  const lowercase = string.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }

  return true;
}
