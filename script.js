console.log("Hello World!");
//<-------------------------------------------------------------------->
function getComputerChoice() {
    let x=Math.random();
    //console.log(x);
    if(x>=0 && x<0.33){
        return "Rock";
    }
    else if(x>=0.33 && x<0.67){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function rounds(playerSelection,computerSelection,playerScore,computerScore){
    if(playerSelection === "rock"){
        if(computerSelection === "Rock"){
            console.log("It's a tie! Both selected Rock!");

        }
        else if(computerSelection === "Paper"){
            console.log("You lose! Paper beats Rock!");
            computerScore=computerScore+1;
        }
        else{
            console.log("You won! Rock beats Scissor!");
            playerScore=playerScore+1;
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "Rock"){
            console.log("You won! Paper beats Rock!");
            playerScore++;
        }
        else if(computerSelection === "Paper"){
            console.log("It's a tie! Both selected Paper!");

        }
        else{
            console.log("You lose! Scissor beats Paper!");
            computerScore++;
        }
    }
    else{
        if(computerSelection === "Rock"){
            console.log("You lose! Rock beats Scissor!");
            computerScore++;
        }
        else if(computerSelection === "Paper"){
            console.log("You win! Scissor beats Paper");
            playerScore++;
        }
        else{
            console.log("It's a tie! Both selected Scissor!");

        }
    }
    return playerScore,computerScore;
}
//<---------------------------------------------------------------------------------------------->

let playerScore=0;
let computerScore=0;
let a = prompt("Pick your move");
let playerSelection = a.toLowerCase();
let computerSelection = getComputerChoice();
rounds(playerSelection,computerSelection,playerScore,computerScore);
rounds(playerSelection,computerSelection,playerScore,computerScore);
rounds(playerSelection,computerSelection,playerScore,computerScore);
rounds(playerSelection,computerSelection,playerScore,computerScore);
rounds(playerSelection,computerSelection,playerScore,computerScore);
console.log(playerSelection, playerScore, computerSelection, computerScore);
if(playerScore==5){
    console.log("You won!");
    flag=false;
}
if(computerScore==5){
    console.log("Better luck next time");
    flag=false;
}

