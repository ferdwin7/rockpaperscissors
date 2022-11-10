const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);

    console.log(randomNumber);
    if (randomNumber < 0 || randomNumber > 2) {
        console.log("Choice out of range!");
    }
    if ((Number.isInteger(randomNumber) < 1)) {
        console.log("Number not integer!");
    }
    console.log(choices[randomNumber]);
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

console.log("Computer choice is " + getComputerChoice());
console.log("Player choice is " + getPlayerChoice());

function playRound(getComputerChoice, getPlayerChoice) {

}