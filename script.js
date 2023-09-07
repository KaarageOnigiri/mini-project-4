// -1. Bring out all the stuffs in localStorage (load win loss)
// -2. display default on screen
// -3. when clicking the start button, time counts down, and game image appears
// 4. during the event, keydown event works, and if typed all answers, game progresses to the next stage
// 5. repeat until users ran out of time or game ran out of questions.

var playBoard = document.getElementById("playBoard");
var timer = document.getElementById("timer");
var button = document.querySelector("button");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var games = ["St_rf_el_", "M_un_ & Bl_d_: B_nn_rl_rd II", "Te_mf_ghT T_cT_cs"];
var x = 0;

// var firstGameScore = {
//     wins: 0,
//     losses: 0
// }
// localStorage.setItem("gameScore", JSON.stringify(firstGameScore));

console.log(games[2])
console.log(games[2].split("")[2], games[2].split("")[11]);

// 1st
console.log("1st", games);

var lastGameScore = JSON.parse(localStorage.getItem("gameScore"));

function init() {
    
    playBoard.textContent = "Non";
    wins.textContent = lastGameScore.wins;
    losses.textContent = lastGameScore.losses;
    // 2nd
    console.log("2nd", lastGameScore);
};

function showQuiz(userAnswer) {

    if (x > games.length) {
        // test
        console.log("You win!");
        playBoard.setAttribute("style", "font-size:50px; background-color:black; color:white");
        playBoard.textContent = "You win!";
        clearInterval(timeRunning);
        lastGameScore.wins++;
        x++;
        localStorage.setItem("gameScore", JSON.stringify(lastGameScore));
        wins.textContent = lastGameScore.wins;
    }
    playBoard.textContent = games[x];

    document.addEventListener("keydown", function(event) {
        // test
        console.log("keydown event");
        var key = event.key.toLowerCase();
        var possibleAnswer = "qwertyuiopasdfghjklzxcvbnm".split("");
        if (x === 0 && possibleAnswer.includes(key)) {
            // test
            console.log(games[x]);
            if ("a".includes(key)) {
                // here: games[x].split("")[2]
                games[x] = games[x].replace(games[x].split("")[2], "a");
                playBoard.textContent = games[x];
            }
            if ("i".includes(key)) {
                games[x] = games[x].replace(games[x].split("")[5], "i");
                playBoard.textContent = games[x];
            }
            if ("d".includes(key)) {
                games[x] = games[x].replace(games[x].split("")[8], "d");
                playBoard.textContent = games[x];
            }
            if (games[x] === "Starfield") {
                userAnswer = true;
                console.log(userAnswer);
                answeredCorrectly();
            }
        } 
        // && games[x].split("")[22]
        else if (x === 1 && possibleAnswer.includes(key)) {
            if ("o".includes(key)) {
                games[x] = games[x].replace(games[x].split("")[1, 22], "o");
                playBoard.textContent = games[x];
                // test
                console.log(games[x]);
            }
            if ("t".includes(key)) {
                games[x] = games[x].replace(games[x].split("")[4], "t");
                playBoard.textContent = games[x];
                // test
                console.log(games[x]);
            }
            if ("a".includes(key)) {
                // && games[x].split("")[16]
                games[x] = games[x].replace(games[x].split("")[10, 16], "a");
                playBoard.textContent = games[x];
                // test
                console.log(games[x]);
            }
            if ("e".includes(key)) {
                // && games[x].split("")[19]
                games[x] = games[x].replace(games[x].split("")[12, 19], "e");
                playBoard.textContent = games[x];
                // test
                console.log(games[x]);
            }
            if (games[x] === "Mount & Blade: Bannerlord II") {
                userAnswer = true;
                console.log(userAnswer);
                answeredCorrectly();
            }
        }
        else if (x === 2 && possibleAnswer.includes(key)) {
            if ("a".includes(key)) {
                games[x] = games[x].replace(games[x].split("")[2, 11], "e");
                playBoard.textContent = games[x];
            }
            if ("i".includes(key)) {
                games[x] = games[x].replace(games[x].split("")[5, 14], "i");
                playBoard.textContent = games[x];
            }
            if (games[x] === "Teamfight Tactics") {
                userAnswer = true;
                console.log(userAnswer);
                showQuiz();
            }
        }
    });
}

function answeredCorrectly() {
    console.log("answeredCorrectly");
    x++;
    clearInterval(timeRunning);
    lastGameScore.wins++;
    localStorage.setItem("gameScore", JSON.stringify(lastGameScore));
    wins.textContent = lastGameScore.wins;
    gameStarted();
}

var timeRunning;
var userAnswer;
var timeLeft;

function gameStarted() {
    console.log("3rd");
    timeLeft = 10;
    userAnswer = false;

    showQuiz(userAnswer);
    
    // timer running
    timeRunning = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        
        if (timeLeft === 0) {
            console.log("hits zero");
            clearInterval(timeRunning);
            playBoard.textContent = "Game Over!";

            // delay game over presence by one second.
            var backTo10 = setInterval(function () {
                console.log("after game over");
                clearInterval(backTo10);
                timer.textContent = 10;
                lastGameScore.losses++;
                localStorage.setItem("gameScore", JSON.stringify(lastGameScore));
                losses.textContent = lastGameScore.losses;
            }, 1000);
        }
    }, 1000);
}

button.addEventListener("click", gameStarted);

init();


// button.addEventListener("click", gameStarted);

// init();


// function gameStarted() {
//     // clicked
//     console.log("game started");

    
    
//     while (x < games.length) {
//         console.log("for loop");
//         playBoard.textContent = games[x];
//         x++;

//         // time begins
//         var timerRunning = setInterval(function() {
//             var timeLeft = 10;
//             console.log(timeLeft);
                   
//             timer.innerHTML = timeLeft;
//             // building keydown section
//             var correct = false;
//             if (correct === true) {
//                 x++;
//                 gameStarted();
//             }
//             if (timeLeft <= 0) {
//                 timer.innerHTML = 10;
//                 // placeholder
//                 playBoard.textContent = "Game Over!";
//                 clearInterval(timerRunning);
//                 // function here
//                 return;
//             }
        
//             timeLeft--;
//         }, 1000);
        
              
//     }
// };
