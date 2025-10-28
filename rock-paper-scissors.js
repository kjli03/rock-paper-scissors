let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if (num < 1/3) {
        return "rock";
    }
    else if (num < 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    if (choice === "rock") {
        return "rock";
    }
    else if (choice === "paper") {
        return "paper";
    }
    else if (choice === "scissors") {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice === "rock") {
            console.log("Tie!");
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        }

        else {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        }
    }
    else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "paper") {
            console.log("Tie!");
        }
        else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        }

        else {
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
    }
    else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "scissors") {
            console.log("Tie!");
        }
        else if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        }

        else {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);