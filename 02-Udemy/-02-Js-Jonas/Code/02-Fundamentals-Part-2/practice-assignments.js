///// Functions /////

/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descPortugal, descGermany, descFinland);
*/

///// Function Declarations vs. Expressions /////
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

const  percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(1441);
console.log(percPortugal1, percChina1, percUSA1);
*/

/////  Arrow Functions /////
/*
// function declartions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// function expressions
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

// Arrow function
const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1, percPortugal3, percChina3, percUSA3);
*/

///// Functions Calling Other Functions /////
/*
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};
const percentageOfWorld1 = (pop) => (pop / 7900) * 100;

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);
*/
///// Introduction to Arrays /////

/*
const populations = [12, 190, 67, 45];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1 = (populations[0]),
  percentageOfWorld1 = (populations[1]),
  percentageOfWorld1 = (populations[2]),
  percentageOfWorld1 = (populations[3])
]
console.log(percentages);
*/

///// Basic Array Operations (Methods) /////
/*
const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')) {
} else {
  console.log('Probably not a central European country :D');
} if (neighbours.indexOf('Sweden')) {
  neighbours[1] = 'Republic of Sweden';
}
console.log(neighbours);
/*

// Another solution
/*
const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);
*/

///// Introduction to Objects /////
/*
const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 102,
  neighbours: ['Norway', 'Sweden', 'Russia']
}
console.log(myCountry);
*/

///// Dot vs. Bracket Notation /////
/*
// 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 102,
  neighbours: ['Norway', 'Sweden', 'Russia']
}

myCountry.population += 2;
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry['population'] -= 2;
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
*/

///// Object Methods /////
/*
const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 102,
  neighbours: ['Norway', 'Sweden', 'Russia'],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million 
      ${this.language}-speaking people, 
      ${this.neighbours.length} neighbouring countries and a 
      capital called ${this.capital}.`
    );
  },

  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false;

    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  }
}
myCountry.describe();
myCountry.describe();
console.log(myCountry);
*/

///// Iteration: The for Loop /////

/*
for (let voter = 1; voter <=50 ;voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}
*/

///// Looping Arrays, Breaking and Continuing /////
/*
// const populations = [12, 190, 67, 45];
const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1 = (populations[0]),
  percentageOfWorld1 = (populations[1]),
  percentageOfWorld1 = (populations[2]),
  percentageOfWorld1 = (populations[3])
]
console.log(percentages);

const percentages2 = [];
for (let i = 0; i > populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);
*/

///// Looping Backwards and Loops in Loops /////
/*
const listOfNeighbours = [
  ['Canada', 'Mexico'], 
  ['Spain'], 
  ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/

///// The while Loop /////
/*
// const populations = [12, 190, 67, 45];
const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentageOfWorld1 = (pop) => (pop / 7900) * 100;

// const percentages = [
//   percentageOfWorld1 = (populations[0]),
//   percentageOfWorld1 = (populations[1]),
//   percentageOfWorld1 = (populations[2]),
//   percentageOfWorld1 = (populations[3])
// ]
// console.log(percentages);

const percentages2 = [];
for (let i = 0; i > populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);

const percentages3 = [];
 let i = 0;
 while (i < populations.length) {
 const perc = percentageOfWorld1(populations[i]);
 percentages3.push(perc);
 i++;
 }
 console.log(percentages3)
*/