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

//Logic for a single round
function playRound(humanChoice, computerChoice) {
    //Case: Tie
    if (humanChoice === computerChoice) {
        roundResults.textContent = "It's a tie!";
        humanScore++;
        humanDisplay.textContent = `Your score: ${humanScore}`;
        computerScore++;
        computerDisplay.textContent = `Computer score: ${computerScore}`;
    }
    //Case: Human wins
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundResults.textContent = "You win! Rock beats Scissors.";
        humanScore++;
        humanDisplay.textContent = `Your score: ${humanScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        roundResults.textContent = "You win! Paper beats Rock.";
        humanScore++;
        humanDisplay.textContent = `Your score: ${humanScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundResults.textContent = "You win! Scissors beats Paper.";
        humanScore++;
        humanDisplay.textContent = `Your score: ${humanScore}`;
    }
    //Case: Computer wins
    else if (humanChoice === "rock" && computerChoice === "paper") {
        roundResults.textContent = "You lose! Paper beats Rock.";
        computerScore++;
        computerDisplay.textContent = `Computer score: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundResults.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
        computerDisplay.textContent = `Computer score: ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundResults.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
        computerDisplay.textContent = `Computer score: ${computerScore}`;
    }
    //Should not occur - Undefined inputs
    else {
        roundResults.textContent = "Error";
    }

    if (humanScore == 5 || computerScore == 5) {
        gameOver();
    }
}

function gameOver() {
    const gameResults = document.createElement("p");
    if (humanScore == computerScore) {
        gameResults.textContent = "Game over! It's a tie!";
    }
    else if (humanScore == 5) {
        gameResults.textContent = "Game over! You win! Congratulations!";
    }
    else {
        gameResults.textContent = "Game over! You lose. Better luck next time!";
    }
    scores.appendChild(gameResults);

    rock.onclick = null;
    paper.onclick = null;
    scissors.onclick = null;
}

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.onclick = () => playRound("rock", getComputerChoice());
paper.onclick = () => playRound("paper", getComputerChoice());
scissors.onclick = () => playRound("scissors", getComputerChoice());


const scores = document.createElement("div");
document.body.appendChild(scores);

const humanDisplay = document.createElement("p");
humanDisplay.textContent = `Your score: ${humanScore}`;
const computerDisplay = document.createElement("p");
computerDisplay.textContent = `Computer score: ${computerScore}`;
scores.appendChild(humanDisplay);
scores.appendChild(computerDisplay);
const roundResults = document.createElement("p");
scores.appendChild(roundResults);