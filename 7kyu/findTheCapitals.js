
var capitals = function (word) {

    return  word.split("").map((word,index) => index + `${word}`)
        .filter(word => word.toUpperCase() === word).map(word => Number(word.slice(0, -1)))
};