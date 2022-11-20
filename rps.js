const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);

    // console.log(randomNumber);
    if (randomNumber < 0 || randomNumber > 2) {
        console.log("Choice out of range!");
    }
    if ((Number.isInteger(randomNumber) < 1)) {
        console.log("Number not integer!");
    }
    // console.log(choices[randomNumber]);
    return choices[randomNumber];
}

let gameplay = document.getElementsByClassName("choice");

let computerScore = 0;
let playerScore = 0;
let gameCounter = 0;

let rock = document.getElementById("rock");
rock.addEventListener("click", function getPlayerChoice() {
    let playerSelection = "Rock";
    game(playerSelection);
})

let paper = document.getElementById("paper");
paper.addEventListener("click", function getPlayerChoice() {
    let playerSelection = "Paper";
    game(playerSelection);
})

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function getPlayerChoice() {
    let playerSelection = "Scissors";
    game(playerSelection);
})

function titleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == "Rock" && playerSelection == "Rock") {
        return "Tie";
    }
    else if (computerSelection == "Scissors" && playerSelection == "Scissors") {
        return "Tie";
    }
    else if (computerSelection == "Paper" && playerSelection == "Paper") {
        return "Tie";
    }
    else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        return "Computer";
    }
    else if (computerSelection == "Rock" && playerSelection == "Paper") {
        return "Player";
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        return "Computer";
    }
    else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        return "Player";
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock") {
        return "Computer";
    }
    else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        return "Player";
    }
}


function game(playerSelection) {
    if (gameCounter < 5) {
        console.log(gameCounter);
        computerSelection = getComputerChoice();
        roundNumber = parseInt(gameCounter) + 1;
        winner = playRound(computerSelection, playerSelection);
        console.log("Computer move is " + computerSelection + ". Player move is " + playerSelection + ".");
        if (winner == "Computer") {
            console.log("Round " + roundNumber + ": Computer Wins!");
            computerScore++;
            const displayComputerScore = document.getElementById('realcomputerscore');
            displayComputerScore.textContent = computerScore;
        }
        else if (winner == "Player") {
            console.log("Round " + roundNumber + ": Player Wins!");
            playerScore++;
            const displayPlayerScore = document.getElementById('realplayerscore');
            displayPlayerScore.textContent = playerScore;
        }
        else {
            console.log("Round " + roundNumber + ": It's a tie!");
        }
        gameCounter++;
    }
    if (gameCounter >= 5) {
        gameCounter = 0;
        const winner = document.getElementById("finalwinner");
        if (computerScore > playerScore) {
            console.log("COMPUTER IS THE FINAL WINNER!!!");
            winner.textContent= "Computer";
        }
        else if (playerScore > computerScore) {
            console.log("PLAYER IS THE FINAL WINNER!!!");
            winner.textContent = "Player";
        }
        else {
            console.log("IT'S A TIE!!!");
            winner.textContent = "Tie";
        }
    }
}