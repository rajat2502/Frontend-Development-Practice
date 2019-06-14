
var rn1= Math.floor((Math.random() * 6) + 1);
var rn2= Math.floor((Math.random() * 6) + 1);

var rimagesrc1="images/"+"dice"+rn1+".png";
var rimagesrc2="images/"+"dice"+rn2+".png";

  document.querySelectorAll("img")[0].setAttribute("src",rimagesrc1);
  document.querySelectorAll("img")[1].setAttribute("src",rimagesrc2);

  if(rn1 > rn2){
   document.querySelector("h1").innerHTML="🚩 Player 1 wins";
  }

  else if(rn1 < rn2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
  }

  else
  {
   document.querySelector("h1").innerHTML="Draw";
  }
