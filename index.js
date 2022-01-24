var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickPattern=[];
var started=false;
var level=0;


$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level"+level);
    nextSequence();
  started=  true;
    }
});

$(".btn").click(handler)

function nextSequence(){
userClickPattern=[]
    level++;
    $("#level-title").text("Level "+level)

    var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColor=buttonColours[randomNumber];
gamePattern.push(randomChosenColor);

// var lastIndexComp=gamePattern.length-1;
// console.log(lastIndexComp)
// checkAns(lastIndexComp)


console.log($("#"+randomChosenColor))
$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//playSound(randomChosenColor)
animatePress(randomChosenColor)


}



function handler(){
var userChosenColour = $(this).attr("id") 

userClickPattern.push(userChosenColour);
console.log(userClickPattern)
// playSound(userChosenColour)

var lastIndex = userClickPattern.length-1;
checkAns(lastIndex)
console.log(lastIndex)

animatePress(userChosenColour)
}

// function playSound(name){
// var audio = new Audio("sound/"+name+".mp3")
// audio.play();
// }

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
  
}
// $(document).keypress(function(event){
//   console.log(event.key)
//   });
function checkAns(currentLevel){
    //var gamePattern=[];
//var userClickPattern=[];
if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  }
   else {
      $("body").addClass("game-over")
      $("h1").text("GAME OVER! Press any key to restart")
      setTimeout(function(){
        $("body").removeClass("game-over")
      },1000)
    
        startOver();
    

    console.log("wrong");

  }

    }
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}
  
  





     