function getComputerChoice() {
    // 0 = Rock
    // 1 = Paper
    // 2 = Scissors
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else if (choice === 2) {
        return "scissors";
    }
    else {
        return "Error";
    }
}

function getHumanChoice() {
    choice = prompt("Rock, paper, scissors, shoot! What is your choice?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else {
        console.log("Error");
    }
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 10; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`Human choice: ${humanChoice}; Computer choice: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    console.log(`Human score: ${humanScore}; Computer score: ${computerScore}`);
    console.log("");
}