const start = document.querySelector(".start");
const preamble = document.querySelector(".preamble");
const game = document.querySelector(".game")
const goku = document.querySelector(".goku");
const ball = document.querySelector(".ball__two");
const jiren =  document.querySelector(".jiren");
const ball2 = document.querySelector(".ball");
const healthone = document.querySelector(".healthone");
const healthtwo = document.querySelector(".healthtwo");
const opacity = document.querySelector(".moving__ball__two");
const endgame = document.querySelector(".game__over");
const winner = document.querySelector(".winner__text");
const restart = document.querySelector(".restart");
const sprite = document.querySelector(".sprite");
const sprite1 = document.querySelector(".sprite__two");
var righty = 1;
var play = document.querySelector(".play");
var stop = document.querySelector(".stop");
play.addEventListener("click",function(){
  var audio = document.getElementById("audio");
  audio.play();
})
stop.addEventListener("click",function(){
  var audio = document.getElementById("audio");
  audio.pause();
})

start.addEventListener("click",function(){
   preamble.style.display="none";
   game.style.display="block";
})

window.addEventListener("keydown",function(e){  
    if (e.keyCode == '87') {
        goku.style.top = -righty++ + "em"; 
        if (   goku.style.top === -11 + "em") {
         righty = 11;
      }
     
    }
    else if(e.keyCode == '90'){     
        goku.style.top = -righty-- + "em";  
        if (  goku.style.top === 16 + "em") {
          righty = -16;
      } 
    }
    else if(e.keyCode == "13" ){ 
      var audio3 = document.getElementById("audio__three");
  audio3.play();
      if(event.repeat){
       ball.style.display="none";
      }   
      else{
        ball.style.display="block";
      }
       ball.animate([
            { transform: 'translateX(0em)' }, 
            { transform: 'translatex(-80em)' }
          ], {   
            duration: 800,
            iterations: 1
          }); 
          opacity.style.opacity=0.9;  
  }
})

function collision(ball2,goku){
   setInterval(() => {
     var playerBound = ball2.getBoundingClientRect();
       carRightBound = goku.getBoundingClientRect();
       if (playerBound.x > carRightBound.x - playerBound.width && playerBound.x < carRightBound.x + carRightBound.width && playerBound.y > carRightBound.y - playerBound.height && playerBound.y < carRightBound.y + carRightBound.height) {
        var audio4 = document.getElementById("audio__five");
        audio4.play();
      healthtwo.value -=5;
        if(healthtwo.value == 0){
          game.style.display="none";
          endgame.style.display="block";
          winner.innerHTML="JIREN !WINS";
          var audio1 = document.getElementById("audio__one");
  audio1.play();
  audio.pause();
        }
        else if(healthtwo.value == 40){
          healthtwo.value.style.backgroundColor = "red";
          sprite1.src="beaten.png";
          var audio7 = document.getElementById("audio__seven");
          audio7.play();
       } 
      }
   }, 350);
   }
   collision(ball2,goku)
   function secondcollision(ball,jiren){
     setInterval(() => {
       var playerBound = ball.getBoundingClientRect();
         carRightBound = jiren.getBoundingClientRect();
         if (playerBound.x > carRightBound.x - playerBound.width && playerBound.x < carRightBound.x + carRightBound.width && playerBound.y > carRightBound.y - playerBound.height && playerBound.y < carRightBound.y + carRightBound.height) {
          var audio5 = document.getElementById("audio__four");
        audio5.play();
        healthone.value -= 5;
  if(healthone.value == 0){
    game.style.display="none";
    endgame.style.display="block";
    winner.innerHTML="GOKU !WINS";
    var audio2 = document.getElementById("audio__two");
    audio2.play();
    audio.pause();
  }
  else if(healthone.value == 30){
    var audio6 = document.getElementById("audio__six");
    audio6.play();
sprite.src="jirenbeaten.png";
  }
         } 
     }, 150);
     }
     secondcollision(ball,jiren)

  restart.addEventListener("click",function(){
    window.location.reload();
  })
     
 //media query
 if (window.matchMedia('  only screen and (orientation:landscape) and (min-device-width:319px) and (max-device-width:700px)').matches){
   const shoot = document.querySelector(".shoot")
  shoot.addEventListener("click",function(){ 
      ball.animate([
        { transform: 'translateX(0em)' }, 
        { transform: 'translatex(-40em)' }
      ], {   
        duration: 800,
        iterations: 1
      }); 
      opacity.style.opacity=0.9;  
  }) 
  var move = -1;
 const up= document.querySelector(".up__button");
 up.addEventListener("click", function(){
  goku.style.top = -move++ + "em";  
 })
 const bottom= document.querySelector(".down__button");
 bottom.addEventListener("click", function(){
  goku.style.top = -move-- + "em";  
  if (  goku.style.top === 1 + "em") {
   move = -1;
}
 })
}