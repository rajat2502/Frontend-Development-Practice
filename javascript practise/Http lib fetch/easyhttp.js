class easyHTTP{
  // get users
  get(url){
    //doing sync
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err));

  // doing async
    
    return new Promise((resolve, reject) =>{

    fetch(url)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    });
  }

  // make an HTTP POST Request
  post(url, data){
    return new Promise((resolve, reject) =>{

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    });
  }

  // make an HTTP PUT request
  put(url, data){
    return new Promise((resolve, reject) =>{

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    });
  }

  // make an HTTP DELETE Request
  delete(url){
    return new Promise((resolve, reject) =>{

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }, 
    })
    .then(res => res.json())
    .then(data => resolve('RESOURCE DELETED....'))
    .catch(err => reject(err));
    });
  }
}