let name = 'Alex Lievense'

console.log(name.length)
console.log(name.toUpperCase())

console.log(name)

let isValidPassword = function (password) {
    let isValid = true
    
    if (password.length < 8) isValid = false
    isValid = isValid && !password.toLowerCase().includes('password')

    return isValid
}

console.log(isValidPassword('Alex'))
console.log(isValidPassword('GoodPasswordRight?'))
console.log(isValidPassword('badpassword...'))