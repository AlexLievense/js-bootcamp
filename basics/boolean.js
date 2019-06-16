let temp = -10;
let isFreezing = temp < 0;

if (isFreezing) {
    console.log('It is freezing out here!');
}
else {
    console.log('Man, is it hot!');
}



// Challenge area
// Create age (your age)
// Calculate isChild - if they are 7 or under
// Calculate isSenior = if they are 65 or older
// Print isChild value ad isSenior value

let age = 5;
let isChild = age <=7;
let isSenior = age >= 65;

console.log(isChild, isSenior);

if (isChild) {
    console.log('Child discount applied');
}

if (isSenior) {
    console.log('Senior discount applied');
}