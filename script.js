function getComputerChoice() {
    let gameRoll = Math.random() * 100;
    if (gameRoll <= 33) {
        return "Rock"
    } else if (gameRoll <= 66 & gameRoll > 33) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice());