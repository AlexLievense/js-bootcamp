let calculateGrade = function (score = 0, total = 100) {
    let percentage = score / total * 100
    let result

    if (percentage >= 90) {
        result = 'A'
    }
    else if (percentage >= 80) {
        result = 'B'
    }
    else if (percentage >= 70) {
        result = 'C'
    }
    else if (percentage >= 60) {
        result = 'D'
    }
    else result = 'F'

    if (result) return `Your result: ${result}`
    else return `Invalid input`
}

console.log(calculateGrade(75, 100));
console.log(calculateGrade(75, 60));
console.log(calculateGrade(0, 0));
console.log(calculateGrade(75, 90));