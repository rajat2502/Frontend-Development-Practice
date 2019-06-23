// class easyHTTP{
//   // get users
//   // get(url){
//   //   //doing sync
//   // //   fetch(url)
//   // //   .then(res => res.json())
//   // //   .then(data => console.log(data))
//   // //   .catch(err => console.log(err));

//   // // doing async
    
//   //   return new Promise((resolve, reject) =>{

//   //   fetch(url, {
//   //     mode: 'no-cors',
//   //     headers:
//   //       {
//   //         "Accept": "application/json, text/plain, */*",
//   //         "Authorization": "Basic QnNWWURydEVSVURaYUV2S3k2SzVtOGNxa0pWaUV4SDFoeTJuV2pBUTpVblk4ZFZud09adldXazIzTEcxYlNLMDNIbDY2anVIdDQyOUJGTlkyRVhPeHhvd3Zjb0ZuQlpmZnV2RjJVbHJ3cWR2aU1FdlBUWUhmUVV3ZlZUSjE0V3BEYWdIbHY0UXFDMHR5V05QT1N3ZjIwakIxSEt2V09udHhjZXkxczhEVA==",
//   //         "Content-Type": "application/json;charset=utf-8"
//   //       }
//   //   })
//   //   .then(res => res.json())
//   //   .then(data => resolve(data))
//   //   .catch(err => reject(err));
//   //   });
//   // }

//   // make an HTTP POST Request
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

//   // // make an HTTP PUT request
//   // put(url, data){
//   //   return new Promise((resolve, reject) =>{

//   //   fetch(url, {
//   //     method: 'PUT',
//   //     headers: {
//   //       'Content-type': 'application/json'
//   //     }, 
//   //     body: JSON.stringify(data)
//   //   })
//   //   .then(res => res.json())
//   //   .then(data => resolve(data))
//   //   .catch(err => reject(err));
//   //   });
//   // }

//   // // make an HTTP DELETE Request
//   // delete(url){
//   //   return new Promise((resolve, reject) =>{

//   //   fetch(url, {
//   //     method: 'DELETE',
//   //     headers: {
//   //       'Content-type': 'application/json'
//   //     }, 
//   //   })
//   //   .then(res => res.json())
//   //   .then(data => resolve('RESOURCE DELETED....'))
//   //   .catch(err => reject(err));
//   //   });
//   // }
// }