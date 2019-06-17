//using ajax and ES5

function easyHTTP(){
  this.http = new XMLHttpRequest();
}

//make an HTTP GET request
easyHTTP.prototype.get = function(url){
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      console.log(self.http.responseText);
    }
  }

  this.http.send();
}

//make an HTTP POST request

//make an HTTP PUT request

//make an HTTP DELETE request