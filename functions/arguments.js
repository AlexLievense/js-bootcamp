let add = function(a = 0, b = 0, c = 0) {
    return a + b + c
}

let result = add(11, 3, 5)
console.log(result)

result = add(11, 5)
console.log(result)

// Challenge area
// getTip
// arguments: total, tipPercent
let getTip = function (total = 0, tipPercent = 0.2) {
    return `A ${tipPercent * 100}% tip on ${total} euro would be ${tipPercent * total} euro`
}

console.log(getTip(100))
console.log(getTip(100, 0.4))
console.log(getTip(50, 0.5))
console.log(getTip(null, 0.3))
