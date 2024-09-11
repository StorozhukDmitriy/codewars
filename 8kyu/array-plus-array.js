// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Solution 
function arrayPlusArray(arr1, arr2) {
    sumOfArr1 = arr1.reduce((sum, el) => sum + el, 0);
    sumOfArr2 = arr2.reduce((sum, el) => sum + el, 0);
    
    return sumOfArr1 + sumOfArr2
    
    
  }