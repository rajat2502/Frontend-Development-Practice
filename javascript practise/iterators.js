// the .forEach() method
// its return value is undefined
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log('I want to eat a ' + fruit)); //arrow functions used ES6


// the .map() method
// its return value is a new array
// example 1
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));

// example 2
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number/100);
console.log(smallNumbers);


// the .filter() method
// its return value is a new array after filtering according to the conditions

// example 1
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})


// .findIndex() method
// returns the index of the first element that satisfies the condition if none then returns -1

// example 1
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal=='elephant');
console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => animal[0] == 's');
console.log(startsWithS)


// .reduce() method
// returns a single value
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ',currentValue);
  return accumulator + currentValue;
}, 10)

console.log(newSum);



// miscellenous iterators
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5)


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
	return word.length > 5;
} ));


// choosing th right iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);