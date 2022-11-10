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

function getPlayerChoice() {
    while (true) {
        let playerSelection = prompt("Choose a move:");
        playerSelection = titleCase(playerSelection);
        let psLowerCase = playerSelection.toLowerCase();
        let incCheck = options.includes(psLowerCase);
        if (incCheck === true) {
            return playerSelection;
        }
    }
}

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
        return "Player";getComputerChoice
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        roundNumber = parseInt(i) + 1;
        winner = playRound(computerSelection, playerSelection);
        console.log("Computer move is " + computerSelection + ". Player move is " + playerSelection + ".");
        if (winner == "Computer") {
            console.log("Round " + roundNumber + ": Computer Wins!");
            computerScore++;
        }
        else if (winner == "Player") {
            console.log("Round " + roundNumber + ": Player Wins!");
            playerScore++;
        }
        else {
            console.log("Round " + roundNumber + ": It's a tie!");
        }
    }
    if (computerScore > playerScore) {
        console.log("COMPUTER IS THE FINAL WINNER!!!");
    }
    else if (playerScore > computerScore) {
        console.log("PLAYER IS THE FINAL WINNER!!!");
    }
    else {
        console.log("IT'S A TIE!!!");
    }
}

game();