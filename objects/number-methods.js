let num = 103.941

console.log(num.toFixed(2))

let getRandomValue = function (min, max) {
    let randomNumber = Math.round(Math.random() * max) + min
    return randomNumber
}

let makeAGuess = function (guessedNumber) {
    let answer = getRandomValue(0,5)
    console.log(answer)
    return guessedNumber === answer
}

console.log(makeAGuess(3))
console.log(makeAGuess(3))
console.log(makeAGuess(3))
console.log(makeAGuess(3))
console.log(makeAGuess(3))
console.log(makeAGuess(3))