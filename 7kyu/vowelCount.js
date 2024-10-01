// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Solution 
function getCount(str) {
    return  str.replace(
      /[B, C, D, F,G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z]/gi,
      ""
    ).length;
  }