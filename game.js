var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}
var randomChosenColour = buttonColors[nextSequence()];
gamePattern = randomChosenColour;
console.log(gamePattern);