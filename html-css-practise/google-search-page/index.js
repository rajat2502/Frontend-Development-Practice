var mic = document.querySelector(".mic")

mic.addEventListener('mouseover', function(){
  document.querySelector('.popup').style.visibility = "visible";
});

mic.addEventListener('mouseout', function(){
  document.querySelector('.popup').style.visibility = "hidden";
});

// window.onscroll = function() {myFunction()};

// // window.onscroll = function(){
// //   if(document.body.scrollTop >= 82){
// //     document.querySelector('nav').style.position = "fixed";
// //   }
// // }

// function myFunction() {
//   if (window.scrollY > 132) {
//     document.querySelector('header').style.position = "fixed";
//     document.querySelector('header').style.background = "white";
//   }
// }