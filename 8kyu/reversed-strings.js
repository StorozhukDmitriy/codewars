// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//solution 
function solution(str) {
    const array1 = str.split("");
    const array2 = [];
    for (i = array1.length - 1; i >= 0; i--) {
      array2[array2.length] = array1[i];
    }
    return array2.join("");
  }
  