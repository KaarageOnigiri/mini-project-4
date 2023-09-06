var playBoard = document.getElementById("playBoard");
var timer = document.getElementById("timer");
var button = document.querySelector("button");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
// var firstGameScore = {
//     wins: 0,
//     losses: 0
// }
// localStorage.setItem("gameScore", JSON.stringify(firstGameScore));
var games = ["St_rf_el", "M_un_ & Bl_d_: B_nn_rl_rd II"];
var x = 0;

// 1st
console.log(games)
console.log(games[0]);


function init() {
    var lastGameScore = JSON.parse(localStorage.getItem("gameScore"));
    playBoard.textContent = "Non";
    wins.textContent = lastGameScore.wins;
    losses.textContent = lastGameScore.losses;
    console.log(lastGameScore);
};



function gameStarted() {
    //test
    console.log("game started");

    var timeLeft = 10;

    for (x; x < games.length; x++) {
        console.log("for loop");
        playBoard.textContent = games[x];

        //time begins
        var timerRunning = setInterval(function() {
            console.log(timeLeft);
            
            timer.innerHTML = timeLeft;
            // building keydown section
            
            if (correct === true) {

            }
            if (timeLeft === 0) {
                timeLeft = 10;
                // placeholder
                clearInterval(timerRunning);
                //function here
                playBoard.textContent = "Game Over!";
            }

            timeLeft--;
        }, 1000);      
    }
};








button.addEventListener("click", gameStarted);

init();
