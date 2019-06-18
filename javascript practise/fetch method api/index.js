// learning Fetch Method
document.getElementById('btn').addEventListener('click', getData);


// using ES6 arrow functions
function getData(){
  fetch('https://api.github.com/users')
  .then((res => res.json())
  )
  .then((data => console.log(data)))
}

// normal syntax
// const sayHello = function(){
//   console.log('hello');
// } 


// arrow functions
// const sayHello = () => {
//   console.log('hello');
// }

// sayHello();

// one line functions dont need arror functions
// const sayHello = () => console.log('hello');

// return something from arrays - normal method
// const sayHello = function(){
//   return 'hello';
// }

// return using arrow functions
// const sayHello = () => 'hello';

// when using object literals as returns wrap them in parenthesis otherwise arrow function will consider it as fucntion body due to curly braces
// const sayHello = () => ({msg:'hello'});

// console.log(sayHello());


// arrow functions with parameters
// const sayHello = (name) => console.log(`hello ${name}`);

// we dont even need parenthesis in case of a single parameter
// const sayHello = name => console.log(`hello ${name}`);

// sayHello('rajat');

// multiple parameters need parameters otherwise it will show initialiser missing error
// const sayHello = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`);

// sayHello('rajat', 'verma');



// arror functions can also be used as callbacks
// const users = ['john', 'rohan', 'mohan'];

// getting length of each name of array using map function
// const nameLengths = users.map(function(user){
//   return user.length;
// });

// map function with arrow 
// const nameLengths = users.map((user) => {
//   return user.length;
// })

// shortest way 
// const nameLengths = users.map(user => user.length);



// console.log(nameLengths);