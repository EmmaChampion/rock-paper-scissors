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



function playGame() {
    //Logic for a single round
    function playRound(humanChoice, computerChoice) {
        //Case: Tie
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
        //Case: Human wins
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
        //Case: Computer wins
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
        //Should not occur - Undefined inputs
        else {
            console.log("Error");
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    //Game consists of 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    //Determine and print the winner
    console.log(`Final scores:\nYou: ${humanScore}\tComputer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win! Congratulations!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose! Better luck next time.");
    }
    else {
        console.log("It's a tie!");
    }
}

playGame();