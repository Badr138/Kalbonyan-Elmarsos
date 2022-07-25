"use strict";

////////////////////////////////////
// Activating Strict Mode

/*
let hasDrversLicense = false;
const passTest = true;

if (passTest) hasDrversLicense = true;
if (hasDrversLicense) console.log("I can drive :D");

// const Interface = "Audio";
// const private = 534;
*/

////////////////////////////////////
// Functions

/*
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice With ${apples} apples and ${oranges} oranges`;r
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

////////////////////////////////////
// Function Declarations vs. Expressions
/*
// function decleration
function calcAge1(birthday) {
  return 2037 - birthday;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthday) {
  return 2037 - birthday;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow Functions
const calcAge3 = birthday => 2037 - birthday;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthday, firstName) => {
  const age = 2037 - birthday;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

////////////////////////////////////
// Functions Calling Other Functions
