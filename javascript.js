function getComputerChoice() {
    // 0 = Rock
    // 1 = Paper
    // 2 = Scissors
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else if (choice === 2) {
        return "Scissors";
    }
    else {
        return "Error";
    }
}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice());
}