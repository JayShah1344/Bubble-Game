
displayTime = document.querySelector(".timer");
bubbles = document.querySelector(".bubbles");
hit = document.querySelector(".hit");
score = document.querySelector(".score");
restart = document.querySelector(".restart");
bubble = document.querySelectorAll(".bubble");

var scoreNumber = 0;
var number = 0;
score.innerHTML = scoreNumber;
hit.innerHTML = numberGenerator();

function incrementScore(){
    scoreNumber += 10;
    score.innerHTML = scoreNumber;
}

function decrementScore(){
    scoreNumber -= 10;
    score.innerHTML = scoreNumber;
}

var timer = 60;
function timeChanger() {
    var timeInterval = setInterval(() => {
        if (timer > 0) {
            timer-- ;
            displayTime.innerHTML = timer;
        }
        else {
            restartGenerator();
            clearInterval(timeInterval)
        }
    }, 1000);
}

function restartGenerator(){
    bubbles.innerHTML = `<button class="restart">Game Over</button>`;
}


function numberGenerator() {
    number = Math.floor(Math.random() * 10);
    return number;
}

var clutter = "";
function bubbleMaker() {
    for (var i = 0; i < 400; i++) {
        clutter += `<div class="bubble">${numberGenerator()}</div>`;
    }
    bubbles.innerHTML = clutter;
}

  
bubbles.addEventListener("click",function(dets){
if(Number(dets.target.textContent) == hit.textContent){
    incrementScore();
    clutter=""
     bubbleMaker();
    hit.innerHTML = numberGenerator();

}
else{
    decrementScore();
    if(scoreNumber < 0){
        scoreNumber = 0;
        score.innerHTML = scoreNumber;
    }
    clutter=""
     bubbleMaker();
    hit.innerHTML = numberGenerator();
}
})


timeChanger();
bubbleMaker();





















