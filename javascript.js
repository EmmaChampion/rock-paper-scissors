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

for (let i = 0; i < 3; i++) {
    console.log(getHumanChoice());
}