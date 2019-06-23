
// // users data
var clientId = 'BsVYDrtERUDZaEvKy6K5m8cqkJViExH1hy2nWjAQ';
var clientSecret = 'UnY8dVnwOZvWWk23LG1bSK03Hl66juHt429BFNY2EXOxxowvcoFnBZffuvF2UlrwqdviMEvPTYHfQUwfVTJ14WpDagHlv4QqC0tyWNPOSwf20jB1HKvWOntxcey1s8DT';
var encodedData = window.btoa(clientId + ':' + clientSecret);
var requestPayload = 'Authorization: Basic ' + encodedData;



$.ajax({
  'url': 'https://www.udemy.com/api-2.0/',
  'type': 'POST',
  'crossDomain': true,
  'content-Type': 'x-www-form-urlencoded',
  'dataType': 'json',
  'headers': {
    // Use access_token previously retrieved from inContact token 
    // service.
    'Authorization': 'basic ' + requestPayload
  },
  'data': requestPayload,
  'success': function (result) {

    console.log(result);
    //Process success actions
    // accessToken = result.access_token;
    // baseURI = result.resource_server_base_uri;
    // alert('Success!\r\nAccess Token:\r' + accessToken + 
    //     '\r\nBase URI:\r' + baseURI)
    // document.getElementById('pageDiv').innerHTML = result.access_token;
    return result;
  }
});







// class easyHTTP{
//   post(url, data){
//     return new Promise((resolve, reject) =>{
//     fetch(url, {
//       method: 'POST',
//       credentials: 'include',
//       mode: 'no-cors',
//       headers: {
//         'Content-type': 'application/json'
//       }, 
//       body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(data => resolve(data))
//     .catch(err => reject(err));
//     });
//   }

// }

// const http = new easyHTTP;

// // users data
// var clientId = 'BsVYDrtERUDZaEvKy6K5m8cqkJViExH1hy2nWjAQ';
// var clientSecret = 'UnY8dVnwOZvWWk23LG1bSK03Hl66juHt429BFNY2EXOxxowvcoFnBZffuvF2UlrwqdviMEvPTYHfQUwfVTJ14WpDagHlv4QqC0tyWNPOSwf20jB1HKvWOntxcey1s8DT';
// var encodedData = window.btoa(clientId + ':' + clientSecret);
// var data = 'Authorization: Basic ' + encodedData;

// // create post
// http.post('https://www.udemy.com/api-2.0/', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));










// //Get posts 
// // http.get('https://jsonplaceholder.typicode.com/posts');

// // doing async
// // http.get('https://www.udemy.com/api-2.0/courses/?search=development')
// // .then(data => console.log(data));
// // // // update post
// // // http.put('https://jsonplaceholder.typicode.com/posts/2', data)
// // // .then(data => console.log(data))
// // // .catch(err => console.log(err));

// // // delete post
// // http.delete('https://jsonplaceholder.typicode.com/posts/2')
// // .then(data => console.log(data))
// // .catch(err => console.log(err));