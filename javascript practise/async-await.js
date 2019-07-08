// async functions

// syntax 1.
// async function myFunc() {
//   // Function body here
// };
// myFunc();

// syntax 2.
// const myFunc = async () => {
  //function body
//};
// myFunc();

// a async function will always return a promise if something is returned otherwise undefined
// example
// we dont have to use the new keyword or promise to define a new promise it will automatically return whatever is returned through it in the form of promises
async function withAsync(num){
  if(num === 0){
	return 'zero';
  }
  else{
	return 'not zero';
  }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
});

// await keyword -- always used inside a async function
const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
  console.log(`I have to decide what's for dinner...`)
  setTimeout(() => {
    console.log('Should I make salad...?')
    setTimeout(() => {
      console.log('Should I make ramen...?')
      setTimeout(() => {
        console.log('Should I make eggs...?')
        setTimeout(() => {
          console.log('Should I make chicken...?')
          resolve('beans')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
})
}

async function announceDinner() {
  // Write your code below:
  const meal = await brainstormDinner(); //it will wait till the promise is returned from the called function and then only it will execute the further code
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();


// what will happen if we havenot used the await 

// // example
// let myPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Yay, I resolved!')
//     }, 1000);
//   });
// }

// async function noAwait() {
//   let value = myPromise();
//   console.log(value);
//  }
 
//  async function yesAwait() {
//   let value = await myPromise();
//   console.log(value);
//  }
 
//  noAwait(); // Prints: Promise { <pending> }
//  yesAwait(); // Prints: Yay, I resolved!


// chaining promises using async await
// basic syntax
// async function asyncAwaitVersion() {
//   let firstValue = await returnsFirstPromise();
//   console.log(firstValue);
//   let secondValue = await returnsSecondPromise(firstValue);
//   console.log(secondValue);
//  }

// example 1
const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5)
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}

let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.')
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`)
      resolve(true)
      }, 1000)
  })
}

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.')
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!') 
        resolve('\n\nDinner is served!')
      }
    }, 1000)
  })
}

const makeBeans = async () => {
  const type = await shopForBeans();
  const isSoft = await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();

// handling errors
//This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < .5 ){
    return true;
  } else {
    return false;
  }
 };
 
 //This function returns a promise that resolves half of the time and rejects half of the time
 let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(()=>{
      let success = randomSuccess();
      if(success){
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  })
 };

 async function hostDinnerParty(){
  try{
    const bean = await cookBeanSouffle();
    console.log(`${bean} is served!`);
  }
  catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty()


// handling independent promises
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}

const serveDinner = async () => {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();


// await promise.all() for concurrent promises requests
const serveDinnerAgain = async () => {
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
let vegetable = foodArray[0];
let starch =  foodArray[1];
let protein =  foodArray[2];
let side =  foodArray[3];

console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
}

serveDinnerAgain()
