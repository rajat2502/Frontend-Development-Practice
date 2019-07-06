// var name;

// document.getElementById('name').addEventListener('keyup', function(e){
//   if(e.which == '13'){
//     name = document.getElementById('name').value
//     console.log(name);
//   }
// })

setInterval(function(){
  var today = new Date();
  hour = today.getHours();
  min = today.getMinutes();
  console.log(today.getSeconds());
  document.getElementById('hour').innerHTML = 
  `${hour}`;
  document.getElementById('min').innerHTML = 
  `${min}`;
}, 1000);

