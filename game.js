const choices=["rock","paper","scissors"];//array used
const playerDisplay=document.getElementById("playerdisplay");
const computerDisplay=document.getElementById("computerdisplay");
const resultDisplay=document.getElementById("resultdisplay");
//for score calculation
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;

function playgame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    //Math.random will give you a floating point number between 0 (inclusive) and 1 (exclusive).
    // Multiplying that by 3 will give you a number in the range 0 (inclusive) through 3 (exclusive), but still floating point.
    // Taking the floor of that number will give you an integer between 0 and 255 (both inclusive).
    let result="";
    if(playerChoice===computerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
              result= (computerChoice==="scissors"?"YOU WIN!":"YOU LOSE!");
              break;
            case "paper":
              result= (computerChoice==="rock"?"YOU WIN!":"YOU LOSE!");
              break;
            case "scissors":
              result= (computerChoice==="paper"?"YOU WIN!":"YOU LOSE!");
              break;
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`
    resultDisplay.textContent=result;

    //to give color to the text upon winning-green and upon loosing gives red
    //to remove the color added
    resultDisplay.classList.remove("greenText","redText")
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break;
    }
}