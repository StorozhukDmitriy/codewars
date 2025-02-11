/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

    12 --> "10 + 2"
45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!*/


//Solution
//12
function expandedForm(num) {
    const arr = num.toString().split('');
    let count = arr.length;
    const arr2 = []
    for (let i =0 ; i < arr.length; i++) {

        arr2.push(arr[i].padEnd(count,"0"));
        count--

    }
    return arr2.map(el=> Number(el)).filter(el=>el).map(el => el.toString()).join(' + ');
}

console.log(expandedForm(70304))