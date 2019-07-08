'use strict';

var posts = [{ title: 'Post one', body: "This is Post One" }, { title: 'Post two', body: "This is Post two" }];

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
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      var error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    var output = '';
    posts.forEach(function (post) {
      output += '<li>' + post.title + '</li>';
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post three', body: 'This is Post three' }).then(getPosts).catch(function (err) {
  console.log(err);
});