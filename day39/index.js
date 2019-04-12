var randomNumber;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern;
var randomChosenColour;


function nextSequence(){
  randomNumber = Math.floor((Math.random() * 4));
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour)
}
