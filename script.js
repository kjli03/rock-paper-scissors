let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if (num < 1 / 3) {
        return "rock";
    }
    else if (num < 2 / 3) {
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

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            roundText.textContent = "Tie!";
        }
        else if (computerChoice === "scissors") {
            roundText.textContent = "You win! Rock beats scissors!";
            humanScore++;
            updateScore();
        }

        else {
            roundText.textContent = "You lose! Paper beats rock!";
            computerScore++;
            updateScore();
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            croundText.textContent = "Tie!";
        }
        else if (computerChoice === "scissors") {
            roundText.textContent = "You lose! Scissors beats paper!";
            computerScore++;
            updateScore();
        }

        else {
            roundText.textContent = "You win! Paper beats rock!";
            humanScore++;
            updateScore();
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            roundText.textContent = "Tie!";
        }
        else if (computerChoice === "rock") {
            roundText.textContent = "You lose! Rock beats scissors!";
            computerScore++;
            updateScore();
        }

        else {
            roundText.textContent = "You win! Scissors beats paper!";
            humanScore++;
            updateScore();
        }
    }

}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

    rockButton.addEventListener("click", () => {
        playRound("rock");
    })
    paperButton.addEventListener("click", () => {
        playRound("paper");
    })
    scissorsButton.addEventListener("click", () => {
        playRound("scissors");
    })

const totalScore = document.getElementById("total-score");
totalScore.textContent = `Score: ${humanScore} to ${computerScore}`;
const finalScore = document.getElementById("final-score");
finalScore.textContent = "";
const div = document.getElementsByClassName("score");

if (humanScore > computerScore) {
    resultsText = "You win ${humanScore} to ${computerScore}!";
}
else if (computerScore > humanScore) {
    resultsText = "You lose ${humanScore} to ${computerScore}!";
}
else {
    resultsText = "It's a tie! ${humanScore} to ${computerScore}!";
}

const roundText = document.getElementById("round");
roundText.textContent = "";

function updateScore() {
    totalScore.textContent = `Score: ${humanScore} to ${computerScore}`;
    if (humanScore >= 5) {
        finalScore.textContent = `You win the game ${humanScore} to ${computerScore}!`;
        resetScores();
    }
    else if (computerScore >= 5) {
        finalScore.textContent = `You lose the game ${humanScore} to ${computerScore}!`;
        resetScores();
    }
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}
function displayMessage(message) {
    
}