const http = new easyHTTP;

//Get posts 
// http.get('https://jsonplaceholder.typicode.com/posts');

// // doing async
// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data));

// users data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// // update post
// http.put('https://jsonplaceholder.typicode.com/posts/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// delete post
http.delete('https://jsonplaceholder.typicode.com/posts/2')
.then(data => console.log(data))
.catch(err => console.log(err));