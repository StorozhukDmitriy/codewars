//Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//Solution

function getGrade(s1, s2, s3) {
    const score = Math.round((s1 + s2 + s3) / 3)
    console.log(score)
    return 90 <= score && score <= 100 ? "A"
        : 80 <= score && score < 90 ? "B"
            : 70 <= score && score < 80 ? 'C'
                : 60 <= score && score < 70 ? 'D'
                    : 0 <= score && score < 60 ? 'F'
                        : undefined
}

console.log(getGrade(65, 70, 59))