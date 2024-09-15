// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//Solution 
function removeEveryOther(arr){
    const arr2 = [];
    for(i = 0; i < arr.length ; i++){
      if( i % 2 == 0){
        arr2[arr2.length] = arr[i];
      }
    } return arr2
  }