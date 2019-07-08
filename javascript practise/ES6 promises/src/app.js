const posts = [
  {title: 'Post one', body: "This is Post One"},
  {title: 'Post two', body: "This is Post two"}
]


//sync way
//it took 2 second to create the posts
// function createPost(post){
//   setTimeout(function(){
//     posts.push(post);
//   },2000);
// }

// //it took 1 sec to get post
// function getPosts(){
//   setTimeout(function(){
//     let output = ''
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post three', body: 'This is Post three'});

// getPosts();

//asynchronourly
function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);

      const error = false;

      if(!error){
        resolve();
      }
      else{
        reject('Error: Something went wrong');
      }
    },2000);
  })
}

function getPosts(){
  setTimeout(function(){
    let output = ''
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post three', body: 'This is Post three'})
.then(getPosts)
.catch(function(err){
  console.log(err);
});

// promise declararion
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if(inventory.sunglasses > 0){
    resolve('Sunglasses order processed.');
  }
  else{
    reject('That item is sold out.');
  }
}

const orderSunglasses = () => { 
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();
console.log(orderPromise);

// settimeout async
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

const usingSTO = () => {
  console.log('hi i am in settimeout');
}
setTimeout(usingSTO, 1000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

// consuming promises
