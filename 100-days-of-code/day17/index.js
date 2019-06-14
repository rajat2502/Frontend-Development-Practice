var a,c;
var player=0;
var computer=0;

function topaper(){
  a=1;
  document.querySelectorAll("img")[1].setAttribute("src","images/left/1.png");
  comp();
}
function torock(){
  a=2;
  document.querySelectorAll("img")[1].setAttribute("src","images/left/2.png");
  comp();
}
function toscissors(){
  a=3;
  document.querySelectorAll("img")[1].setAttribute("src","images/left/3.png");
  comp();
}

function comp(){
  c = Math.floor((Math.random() * 3) + 1);
  var imageadd="images/right/"+c+".png";
  document.querySelectorAll("img")[0].setAttribute("src",imageadd);
  decider();
}

function decider(){
  if(a==1 && c==2){
    player++;
  }
  else if(a==1 && c==3){
   computer++;
 }
  else if(a==2 && c==3){
   player++;
 }
  else if(a==3 && c==1){
   player++;
 }
  else if(c==3 && a==1){
   computer++;
 }
  else if(a==c) ;
  else{
   computer++;
 }
 scoreupdate();
}

function scoreupdate(){
  document.getElementById("player").innerHTML= player;
  document.getElementById("computer").innerHTML= computer;
  setInterval("togif()",2000);
}

function togif(){
  document.querySelectorAll("img")[0].setAttribute("src","images/right/g.gif");
  document.querySelectorAll("img")[1].setAttribute("src","images/left/g.gif");
  if(player==3 || computer==3){
      document.getElementById("playagain").style.display="inline";
    if(player==3){
      document.getElementById("result").innerHTML="You Wins🥳";
    }
    else {
      document.getElementById("result").innerHTML="You Lose👎🏼";
    }
  }
}
