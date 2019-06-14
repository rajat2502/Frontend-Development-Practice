
function readinput(){
  var value = document.getElementById("readme").value;
  var random = Math.floor((Math.random() * 9)+1);
  if(random==value){
    document.getElementById("result").innerHTML="Hurrey You Won!!!";
    document.getElementById("random").innerHTML="The number is "+ random;
    document.getElementById("gif").style.display="inline";
  }
  else if(value >= 10 || value <=0){
    alert("Enter a Number between 0 and 10");
  }
  else{
    document.getElementById("result").innerHTML="Better Luck Next Time";
    document.getElementById("random").innerHTML="The number is "+ random;
    document.getElementById("btn1").style.display="block";
  }


}
