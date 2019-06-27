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
//     document.querySelector('nav').style.position = "fixed";
//     document.querySelector('nav').style.background = "white";
//     document.querySelector('nav').style.marginTop = 0;
//     document.querySelector('nav').style.boxShadow = "2px 2px 2px #888888";    
//   }
//   else{
//     document.querySelector('nav').style.position = "flex";
//     document.querySelector('nav').style.background = "white";
//     document.querySelector('nav').style.marginTop = 16;
//     document.querySelector('nav').style.boxShadow = 0;    
//   }
// }