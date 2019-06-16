// Undefined for variable
let name

if (name === undefined){
    console.log('Please provide a name.')
}
else {
    console.log(`The name provided is ${name}`)
}

// Undefined for function arguments, if the function is called without parameters, see second function call below...
let square = function (num) {
    console.log(num*num)
}

square(3)
square()

// function has no return statement, result is undefined for that reason
let result = square();

console.log(result)