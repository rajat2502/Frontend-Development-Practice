// var name;

// document.getElementById('name').addEventListener('keyup', function(e){
//   if(e.which == '13'){
//     name = document.getElementById('name').value
//     console.log(name);
//   }
// })

// set the time on opening
var today = new Date();
  hour = today.getHours();
  min = today.getMinutes();
  console.log(today.getSeconds());

  document.getElementById('hour').innerHTML = 
  `${hour}`;

  if(min < 10){
    document.getElementById('min').innerHTML = 
  `0${min}`;
  }
  else{
  document.getElementById('min').innerHTML = 
  `${min}`;
  }

// check and change the time
setInterval(function(){
  var today = new Date();
  hour = today.getHours();
  min = today.getMinutes();

  document.getElementById('hour').innerHTML = 
  `${hour}`;

  if(min < 10){
    document.getElementById('min').innerHTML = 
  `0${min}`;
  }
  else{
  document.getElementById('min').innerHTML = 
  `${min}`;
  }

}, 1000);

random = Math.floor(Math.random() * 6) + 1;
imgaddress = "images/" + random + ".jpg";
console.log(imgaddress);
document.body.background = imgaddress;
 
